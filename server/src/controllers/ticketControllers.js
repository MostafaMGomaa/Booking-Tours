const Ticket = require('../models/ticketModel');
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require('./handleOps');

exports.getAllTicket = getAll(Ticket);
exports.getOneTicket = getOne(Ticket);
exports.createOneTicket = createOne(Ticket);
exports.updateOneTicket = updateOne(Ticket);
exports.deleteOneTicket = deleteOne(Ticket);
