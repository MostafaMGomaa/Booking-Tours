const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const cookieParser = require('cookie-parser');
const swaggeJsDoc = require('swagger-jsdoc');
const xss = require('xss-clean');
const dataSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const tourRoutes = require('./routes/tourRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorControllers');

const app = express();
dotenv.config({ path: `${__dirname}/.env` });

// Middlewares
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
app.use(
  rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
  })
);
app.use(express.static(`${__dirname}/public`));
app.use(dataSanitize());
app.use(xss());
app.use(hpp());

// Routes
// Test server
app.get('healthz', (req, res) => {
  res.status(200, {
    status: '✌️',
  });
});

app.get('hi', (req, res) => {
  res.send('5');
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
