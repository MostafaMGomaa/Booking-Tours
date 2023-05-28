const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const data = await features.query;

    res.status(200).json({
      status: 'success',
      result: data.length,
      data,
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = await Model.findById(req.params.id);

    if (popOptions) query = await query.populate(popOptions);

    const doc = await query;

    if (!doc)
      return next(new AppError(`Cannot find any result with this ID`, 404));

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      data: {
        doc,
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
