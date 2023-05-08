const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require('./handleOps');

exports.getAllUsers = getAll(User);

exports.deleteAll = catchAsync(async (req, res) => {
  await User.deleteMany();
  res.status(204).send({
    status: 'success',
  });
});

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.getUser = getOne(User, { path: 'ticket' });

exports.deleteMe = catchAsync(async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.status(204).json({
    status: 'success',
  });
});

exports.updateUserData = catchAsync(async (req, res) => {
  // update only name and email.
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});
