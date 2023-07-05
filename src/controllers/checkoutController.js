const stripe = require('stripe')(process.env.STRIPE_SECERT_KEY);
const Ticket = require('../models/ticketModel');
const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const Email = require('../utils/email');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get user's ticket by id.
  const ticketId = req.params.ticketId;
  const ticket = await Ticket.findById(ticketId);

  const tour = await Tour.findById(ticket.tour.id);

  // 2) Create checkout session.
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/?tour=${
      req.params.tourId
    }&user=${req.user.id}&price=${tour.price}&numOfTickets=${
      ticket.numOfTickets
    }`,
    cancel_url: `${req.protocol}://${req.get('host')}/tours/`,
    customer_email: req.user.email,
    client_reference_id: req.params.ticketId,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: ticket.tour.price - ticket.tour.priceDiscount,
          product_data: {
            name: `${ticket.tour.name} Tour`,
            description: ticket.tour.description,
          },
        },
        quantity: ticket.numOfTickets,
      },
    ],
    mode: 'payment',
  });

  // 3) Create a session as response
  res.status(200).json({
    status: 'success',
    session,
  });
});

exports.createBookingCheckout = catchAsync(async (req, res, next) => {
  const { tour, user, price, numOfTickets } = req.query;

  if (!tour && !user && !price) return next();

  if (!numOfTickets) numOfTickets = 1;

  // Get tour.
  const currentTour = await Tour.findById(tour);

  // Check if there r available tickets.
  if (currentTour.availableTicket === 0)
    return next(new AppError('Sorry no enough tickets available', 400));

  // --There arr available tickets?
  if (currentTour.availableTicket < numOfTickets)
    return next(
      new AppError('Sorry, Available tickets less than you want.', 400)
    );

  currentTour.availableTicket = currentTour.availableTicket - numOfTickets;
  await currentTour.save();

  // Create ticket .
  const ticket = await Ticket.create({ user, tour, numOfTickets, paid: true });

  new Email(req.user, ``).sendBooingConfirmation(ticket);

  res.status(201).json({
    status: 'success',
    data: { ticket },
  });
});
