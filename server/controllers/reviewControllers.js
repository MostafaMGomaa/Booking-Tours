const Review = require('../models/reviewModel');
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require('./handleOps');

exports.setTourUserId = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = getAll(Review);
exports.getOneReview = getOne(Review, { path: 'users tours', select: '-__v ' });
exports.createOneReview = createOne(Review);
exports.updateOneReview = updateOne(Review);
exports.deleteOneReview = deleteOne(Review);
