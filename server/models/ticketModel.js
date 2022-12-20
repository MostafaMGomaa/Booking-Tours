const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
  tour: {
    type: mongoose.Schema.ObjectId,
    ref: 'Tour',
    required: [true, 'Review must belong to a tour.'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Review must belong to a user'],
  },
  seatNum: Number,
});

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;
