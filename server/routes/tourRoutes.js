const router = require('express').Router();

const app = require('../app');
const {
  createTour,
  deleteTour,
  getAllTours,
  getTour,
  updateTour,
} = require('../controllers/tourController');
module.exports = router;
