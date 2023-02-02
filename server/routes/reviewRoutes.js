const router = require('express').Router({ mergeParams: true });

const app = require('../app');
const {
  createOneReview,
  deleteOneReview,
  getAllReviews,
  getOneReview,
  updateOneReview,
} = require('../controllers/reviewControllers');

const { restrictTo, protect } = require('../controllers/authControllers');

router.use(protect);

router.route('/').get(getAllReviews).post(restrictTo('user'), createOneReview);

router
  .route('/:id')
  .get(getOneReview)
  .patch(restrictTo('user', 'admin'), updateOneReview)
  .delete(restrictTo('user', 'admin'), deleteOneReview);

module.exports = router;
