const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECERT, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  // Remove passowrd from output
  newUser.password = undefined;

  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'sucess',
    token,
    data: {
      newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new AppError('Please provide email and passoword', 400));

  // 1) Find user by email
  const user = await User.findOne({ email }).select('+password');

  // 2) Verify if user exists and input passsword is correct.
  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new AppError('Icorrect email or password', 401));

  // 3) Send Token to client
  const token = signToken(user._id);

  res.status(200).json({
    status: 'sucess',
    token,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  /**
   * Token will sent with header called "Authorization" .
   * Authorization must start with Bearer keyword then token,
   * e.g. Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX
   */
  // 1) Getting token and check if it exists .
  let token;
  if (
    req.header.Authorization &&
    req.header.Authorization.startsWith('Bearer')
  ) {
    token = req.header.Authorization.spilt(' ')[1];
  }

  if (!token)
    return next(
      new AppError('You are not logged in! Please login for get access', 401)
    );

  // 2) Verification token
  /**
   * We promisfy verify fn beacuase all project deal with promises and to treat fn as async fn.
   * We can use callback fn with verify BTW.
   */

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECERT);

  // 3) Check the use if still exists.
  const user = await User.findById(decoded.id);
  if (!user)
    return next(
      new AppError('The token beloning to this user does not exists', 401)
    );

  // 4) Check if user change his password after the token is issused.
  if (user.changedPasswordAfter(decoded.iat))
    return next(
      new AppError('User changed his password! please login again', 401)
    );

  // Give access to user and sent his data with req obj
  req.user = user;

  next();
});

exports.restictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(
        new AppError(`You can't do this action as ${req.user.role}`, 403)
      );
    next();
  };
};
