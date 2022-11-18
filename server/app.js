const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const userRoutes = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorControllers');

const app = express();

dotenv.config({ path: './config.env' });

// Middlewares

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json());

// Routes
app.use('/api/v1/users', userRoutes);

// Error
app.all('*', (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} in server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
