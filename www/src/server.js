const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const https = require('https');

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

const listener = () => async () => {
  console.log(`Server listen to port ${PORT}`);
};
if (process.env.NODE_ENV === 'production') {
  const key = fs.readFileSync(
    '/etc/letsencrypt/live/booking-tours-dev2.us-east-1.elasticbeanstalk.com/privkey.pem',
    'utf8'
  );
  const cert = fs.readFileSync(
    '/etc/letsencrypt/live/booking-tours-dev2.us-east-1.elasticbeanstalk.com/fullchain.pem',
    'utf8'
  );

  https.createServer({ key, cert }, app.listen(PORT, listener));
} else {
  const server = app.listen(PORT, listener);
}

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log(`Unhandled Rejection, 💥 Shutting down...`);

  server.close(() => {
    process.exit(1);
  });
});

// console.log(c);
