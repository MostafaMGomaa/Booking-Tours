const router = require('express').Router();

const app = require('../app');
const {
  createOneReview,
  deleteOneReview,
  getAllReviews,
  getOneReview,
  updateOneReview,
} = require('../controllers/reviewControllers');

module.exports = router;
