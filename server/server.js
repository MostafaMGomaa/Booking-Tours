const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
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

mongoose.connect(DB).then(() => {
  console.log('DB connection successful!');
});

const server = app.listen(PORT, () => {
  console.log(`Server listen to port 3000`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log(`Unhandled Rejection, 💥 Shutting down...`);

  server.close(() => {
    process.exit(1);
  });
});

// console.log(c);
