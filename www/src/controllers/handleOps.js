const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const { Model } = require('mongoose');

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    let filter = {};

    if (req.params.tourId) filter = { tour: req.params.tourId };

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limit()
      .pagnation();

    const data = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      result: data.length,
      data,
    });
  });

exports.getOne = (Model, populateOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);

    if (populateOptions) query = query.populate(populateOptions);

    const doc = await query;

    if (!doc)
      return next(new AppError('Cannot find any result with this ID', 404));

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.create(req.body);

    // SEND RESPONSE
    res.status(201).json({
      status: 'success',
      data,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!data)
      return next(new AppError('Cannot find any result with this ID', 404));

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      data,
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findByIdAndDelete(req.params.id);

    if (!data)
      return next(new AppError(`Cannot find any result with this ID`, 404));

    res.status(204).json({
      status: 'success',
      message: 'tour deleted successfully',
    });
  });

exports.deleteAll = (Model) =>
  catchAsync(async (req, res, next) => {
    await Model.deleteMany();

    res.status(204).json({
      status: 'success',
    });
  });
