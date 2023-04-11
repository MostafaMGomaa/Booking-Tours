const router = require('express').Router();

const app = require('../app');
const {
  createOneTicket,
  deleteOneTicket,
  getAllTicket,
  getOneTicket,
  updateOneTicket,
} = require('../controllers/ticketControllers');
const { getCheckoutSession } = require('./../controllers/checkoutController');

router.route('/').get(getAllTicket).post(createOneTicket);

router
  .route('/:id')
  .get(getOneTicket)
  .patch(updateOneTicket)
  .delete(deleteOneTicket);

router.get('/checkout-session/:tourId', getCheckoutSession);

module.exports = router;
