const express = require('express');
const dotenv = require('dotenv');

const userRoutes = require('./routes/userRoutes');

const app = express();

dotenv.config('./config.env');

// Routes
app.use('/api/v1/users', userRoutes);

// Error
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Cannot find ${req.originalUrl} in server`,
  });
});
module.exports = app;
