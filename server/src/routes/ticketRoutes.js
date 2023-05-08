const router = require('express').Router();

const {
  createOneTicket,
  deleteOneTicket,
  getAllTicket,
  getOneTicket,
  updateOneTicket,
  deleteAll,
} = require('../controllers/ticketControllers');
const { getCheckoutSession } = require('./../controllers/checkoutController');

const { protect } = require('../controllers/authControllers');

router.use(protect);
router.delete('/deleteAll', deleteAll);

router.route('/').get(getAllTicket).post(createOneTicket);

router
  .route('/:id')
  .get(getOneTicket)
  .patch(updateOneTicket)
  .delete(deleteOneTicket);

router.get('/checkout-session/:tourId', getCheckoutSession);

module.exports = router;
