const Review = require('../models/reviewModel');
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require('./handleOps');

exports.getAllReviews = getAll(Review);
exports.getOneReview = getOne(Review);
exports.createOneReview = createOne(Review);
exports.updateOneReview = updateOne(Review);
exports.deleteOneReview = deleteOne(Review);
