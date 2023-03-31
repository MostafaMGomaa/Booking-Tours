const router = require('express').Router();

const app = require('../app');
const {
  createOneTicket,
  deleteOneTicket,
  getAllTicket,
  getOneTicket,
  updateOneTicket,
} = require('../controllers/ticketControllers');

router.route('/').get(getAllTicket).post(createOneTicket);

router
  .route('/:id')
  .get(getOneTicket)
  .patch(updateOneTicket)
  .delete(deleteOneTicket);

module.exports = router;
