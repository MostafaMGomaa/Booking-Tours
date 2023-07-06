const router = require('express').Router();

const {
  createOneTicket,
  deleteOneTicket,
  getAllTicket,
  getOneTicket,
  updateOneTicket,
  deleteAllTickets,
} = require('../controllers/ticketControllers');

const {
  getCheckoutSession,
  createBookingCheckout,
} = require('./../controllers/checkoutController');

const { protect } = require('../controllers/authControllers');

router.delete('/deleteAll', deleteAllTickets);
router.use(protect);

router.route('/').get(getAllTicket).post(createOneTicket);

router
  .route('/:id')
  .get(getOneTicket)
  .patch(updateOneTicket)
  .delete(deleteOneTicket);

router.post('/checkout-session', getCheckoutSession);

module.exports = router;
