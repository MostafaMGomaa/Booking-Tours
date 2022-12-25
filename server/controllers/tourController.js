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
exports.getTour = getOne(Tour, { path: 'reviews', select: '-__v ' });
exports.createTour = createOne(Tour);

exports.updateTour = updateOne(Tour);
exports.deleteTour = deleteOne(Tour);

exports.search = catchAsync(async (req, res, next) => {
  const filter = req.body;
  data = await Tour.find(filter);
  if (data.length === 0) {
    return res.status(200).json({
      status: 'success',
      message: 'No such tours founded in this time',
      data,
    });
  }
  res.status(200).json({
    status: 'success',
    result: data.length,
    data,
  });
});
