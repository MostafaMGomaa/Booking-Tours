const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    slug: String,
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
    startDates: [Date],
    duration: {
      type: Number,
      required: [true, 'must add tour duration time'],
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
        message: 'invalid input, must be one of [Plan, Bus, Car]',
      },
      default: 'plane',
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
