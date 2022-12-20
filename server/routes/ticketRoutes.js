const router = require('express').Router();

const app = require('../app');
const {
  createOneTicket,
  deleteOneTicket,
  getAllTicket,
  getOneTicket,
  updateOneTicket,
} = require('../controllers/ticketControllers');

module.exports = router;
