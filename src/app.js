const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const xss = require('xss-clean');
const dataSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');
const multer = require('multer');

const userRoutes = require('./routes/userRoutes');
const tourRoutes = require('./routes/tourRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorControllers');

const app = express();
dotenv.config({ path: `${__dirname}/.env` });
console.log(`${__dirname}/.env`);
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

app.use((req, res, next) => {
  res.header({ 'Access-Control-Allow-Credentials': true });
  next();
});

// Routes
// Test server
app.get('/healthz', (req, res) => {
  res.status(200).json({
    status: 'success',
  });
});
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Try GET /api/v1/tours',
  });
});

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/reviews', reviewRoutes);
app.use('/api/v1/tickets', ticketRoutes);

// Error

app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        message: 'file is too large',
      });
    }

    if (error.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({
        message: 'File limit reached',
      });
    }

    if (error.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).json({
        message: 'File must be an image',
      });
    }
  }
});

app.all('*', (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} in server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
