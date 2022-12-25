const router = require('express').Router();

const app = require('../app');
const {
  createTour,
  deleteTour,
  getAllTours,
  getTour,
  updateTour,
} = require('../controllers/tourController');

const { protect, restrictTo } = require('../controllers/authControllers');

router
  .route('/')
  .get(getAllTours)
  .post(protect, restrictTo('admin'), createTour);

router.use(protect);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
