const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

const { getAll, getOne, deleteAll } = require('./handleOps');
const { s3Uploadv2 } = require('./imageController');

exports.getAllUsers = getAll(User);

exports.deleteAllUsers = deleteAll(User);

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.getUser = getOne(User, { path: 'ticket reviews' });

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

exports.updateUserAvatar = catchAsync(async (req, res) => {
  const results = await s3Uploadv2(req.user.name, req.files[0]);
  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      photo: results.Location,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  return res.json({
    status: 'success',
    message: `${req.user.name}'s avatar changed successfully`,
  });
});
