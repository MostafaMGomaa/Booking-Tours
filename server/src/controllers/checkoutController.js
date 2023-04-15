const stripe = require('stripe')(process.env.STRIPE_SECERT_KEY);
const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get user's cart by id.
  const tour = await Tour.findById(req.params.tourId);

  // 2) Create checkout session.
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}`,
    cancel_url: `${req.protocol}://${req.get('host')}/tour/`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourId,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: tour.price - tour.priceDiscount,
          product_data: {
            name: `${tour.name} Tour`,
            description: tour.description,
          },
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
  });

  // 3) Create a session as response
  res.status(200).json({
    status: 'success',
    session,
    data: {
      tour,
    },
  });
});
