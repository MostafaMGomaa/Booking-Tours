const multer = require('multer');
const { S3 } = require('aws-sdk');
const AppError = require('../utils/appError');

exports.s3Uploadv2 = async (username, file) => {
  const s3 = new S3({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: process.env.AWS_REGION,
  });

  const param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `avatars/${username}-${Date.now()}`,
    Body: file.buffer,
  };
  return await s3
    .upload(param)
    .promise()
    .catch((err) => {
      return new AppError('WRONG', 400);
    });
};

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.split('/')[0] === 'image') {
    cb(null, true);
  } else {
    cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE'), false);
  }
};

exports.upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1000000000, files: 2 },
});
