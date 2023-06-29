const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require('./handleOps');

exports.getAllTours = getAll(Tour);
exports.getTour = getOne(Tour);
exports.createTour = createOne(Tour);
exports.updateTour = updateOne(Tour);
exports.deleteTour = deleteOne(Tour);
