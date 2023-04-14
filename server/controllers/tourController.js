const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require('controllers/handleOps');

exports.getAllTours = getAll(Tour);
exports.getTour = getOne(Tour, { path: 'reviews', select: '-__v ' });
exports.createTour = createOne(Tour);
exports.updateTour = updateOne(Tour);
exports.deleteTour = deleteOne(Tour);
