const router = require('express').Router({ mergeParams: true });

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

const reviewRouter = require('./reviewRoutes');

router.use('/:tourId/reviews', reviewRouter);

router.use(protect);

router
  .route('/:id')
  .get(getTour)
  .patch(restrictTo('admin'), updateTour)
  .delete(restrictTo('admin'), deleteTour);

module.exports = router;
