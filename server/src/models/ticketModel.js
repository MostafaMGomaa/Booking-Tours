const mongoose = require('mongoose');
const crypto = require('crypto');

const ticketSchema = mongoose.Schema(
  {
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'Ticket must belong to a tour.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Ticket must belong to a user'],
    },
    seatNum: [String],
    numOfTickets: {
      type: Number,
      default: 1,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// ticketSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'user',
//     select: 'name photo',
//   });
//   next();
// });

ticketSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'tour',
    select: '-__v',
  });
  next();
});

// Before save generate seatNum
ticketSchema.pre('save', function (next) {
  for (let i = 0; i < this.numOfTickets; i++)
    this.seatNum[i] = crypto.randomBytes(1).toString('hex');

  this.populate({
    path: 'tour',
    select: '-__v',
  });
  next();
});
const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;
