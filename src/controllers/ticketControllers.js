const Ticket = require('../models/ticketModel');
const Tour = require('../models/tourModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require('./handleOps');

exports.getAllTicket = getAll(Ticket);
exports.getOneTicket = getOne(Ticket);
exports.updateOneTicket = updateOne(Ticket);
exports.deleteOneTicket = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  // Find the ticket, tour
  const ticket = await Ticket.findByIdAndDelete(id);
  const tour = await Tour.findById(ticket.tour);

  // Add numOfTicket  booked to tour again.
  tour.availableTicket += ticket.numOfTickets;
  await tour.save();

  // Delete the ticket
  res.status(204).json({ status: 'success' });
});

exports.createOneTicket = catchAsync(async (req, res, next) => {
  // Extract data from body,  get userID from req.user.
  let { user, tour, numOfTickets } = req.body;
  if (!user) user = req.user;
  if (!numOfTickets) numOfTickets = 1;

  // Get tour.
  const currentTour = await Tour.findById(tour);

  // Check if there r available tickets.
  if (currentTour.availableTicket === 0)
    return next(new AppError('Sorry this tour full booked', 400));

  // --available tickets
  if (currentTour.availableTicket < numOfTickets)
    return next(
      new AppError('Sorry, Available tickets less than you want.', 400)
    );

  currentTour.availableTicket = currentTour.availableTicket - numOfTickets;
  await currentTour.save();

  // Create ticket .
  const ticket = await Ticket.create({ user, tour, numOfTickets });
  res.status(201).json({
    status: 'success',
    data: { ticket },
  });
});

exports.deleteAll = catchAsync(async (req, res) => {
  await Ticket.deleteMany();
  res.send({});
});
