const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
const swaggeJsDoc = require('swagger-jsdoc');

const userRoutes = require('./routes/userRoutes');
const tourRoutes = require('./routes/tourRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorControllers');

const app = express();

dotenv.config({ path: './config.env' });

// Middlewares
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json());

// Routes
// Test server
app.get('healthz', (req, res) => {
  res.status(200, {
    status: '✌️',
  });
});
// Setting up swagger.

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Booking-Flight API',
      version: '1.0.0',
      description: 'Test sweger',
    },
    servers: [
      {
        url: 'http://127.0.0.1:3000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const spec = swaggeJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/reviews', reviewRoutes);
app.use('/api/v1/tickets', ticketRoutes);

// Error
app.all('*', (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} in server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
