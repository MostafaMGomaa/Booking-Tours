const stripe = require('stripe')(process.env.STRIPE_SECERT_KEY);
const Ticket = require('../models/ticketModel');
const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get user's ticket by id.
  const ticketId = req.params.ticketId;
  const ticket = await Ticket.findById(ticketId);

  // const tour = await Tour.findById(ticket.tour.id);

  // 2) Create checkout session.
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}`,
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
    data: {},
  });
});
