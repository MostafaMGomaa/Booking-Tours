const AppError = require('../utils/appError');

const handleDuplicateFieldsErrorDB = (err) => {
  // Capture the value which duplicate in error msg using Regluar expression.
  const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];

  const message = `Duplicate field value: ${value}. Please use another one`;
  return new AppError(message, 400);
};

const handleCastErrorDB = (err) => {
  const message = `Invaild ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);

  const message = `Invaild Input Data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleJWTError = (err) =>
  new AppError('Invaild token! please login again!', 401);

const handleJWTExpiredError = (err) =>
  new AppError('Yout token has expired! please login again!', 401);

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  // Operational error (Trusted) send mesage to client.
  if ((err.isOperational = true)) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    // Programming or other unknown error.
  } else {
    // 1) log error.
    console.error('Error 💥', err);
    // 2) send genric error to client.
    res.status(500).json({
      status: 'error',
      message: 'Somthing went wrong',
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    // Its not best practice to set fn argument to another fn.
    let error = { ...err };

    // Invalide DB ids.
    if (err.name === 'CastError') error = handleCastErrorDB(error);
    if (err.code === 11000) error = handleDuplicateFieldsErrorDB(error);
    if (err.name === 'ValidationError') error = handleValidationErrorDB(error);
    if (err.name === 'JsonWebTokenError') error = handleJWTError(error);
    if (err.name === 'TokenExpiredError') error = handleJWTExpiredError(error);
    sendErrorProd(error, res);
  }
};
