const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    fromCountry: {
      type: String,
      required: [true, 'the tour must have from country property'],
    },
    toCountry: {
      type: String,
      required: [true, 'the tour must have destination country '],
    },
    fromCity: {
      type: String,
      required: [true, 'the tour must have from City property'],
    },
    toCity: {
      type: String,
      required: [true, 'the tour must have destination City '],
    },
    fromSite: {
      type: String,
      required: [true, 'the tour must have Airport/Station'],
    },
    toSite: {
      type: String,
      required: [true, 'the tour must have Airport/Station'],
    },
    description: {
      type: String,
      trim: true,
    },
    summary: {
      type: String,
      require: [true, 'must add tour summary'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'the tour must have price'],
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
      set: (val) => Math.round(val * 10) / 10, // 4.666666, 46.6666, 47, 4.7
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    takeOff: {
      type: Date,
      default: new Date(Date.now()),
    },
    duration: {
      type: Number,
      required: [true, 'Tour must have duration time'],
    },
    endDate: {
      type: Date,
      // require: ['true', 'Tour must have end date'],
    },
    totalTickets: {
      type: Number,
      default: 90,
    },
    availableTicket: {
      type: Number,
      default: 90,
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          return this.price > val;
        },
        message: 'discount price must be less than price',
      },
      default: 0,
    },
    transportation: {
      type: String,
      trim: true,
      enum: {
        values: ['plane', 'bus', 'car'],
        message: 'invalid input, must be one of [plane, bus, car]',
      },
      default: 'plane',
    },
    type: {
      type: String,
      enum: {
        values: ['oneway', 'return'],
        message: 'Tour must be oneway or return',
      },
    },
    baggage: {
      type: Number,
      validate: {
        validator: function (val) {
          return val <= 32;
        },
        message: 'Baggage cannot exceed 32 kg per piece',
      },
    },
    class: {
      type: String,
      enum: {
        values: ['first', 'business', 'economy', 'comfort', ''],
        message: 'Tour could be first , business, economy class or ',
      },
    },
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

tourSchema.index({ fromCountry: 1, toCountry: 1, price: -1 });

tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id',
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
