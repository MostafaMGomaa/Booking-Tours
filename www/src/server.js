const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env` });
const app = require('./app');

const PORT = process.env.PORT || 3000;

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log(`Uncaught Exception , 💥 Shutting down...`);

  process.exit(1);
});

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.set('strictQuery', false);

mongoose.connect(DB).then(() => {
  console.log('DB connection successfully!');
});

const server = app.listen(PORT, async () => {
  console.log(`Server listen to port ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log(`Unhandled Rejection, 💥 Shutting down...`);

  server.close(() => {
    process.exit(1);
  });
});

// console.log(c);
