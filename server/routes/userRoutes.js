const router = require('express').Router();

const app = require('../app');
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  protect,
  restrictTo,
} = require('../controllers/authControllers');

const { getAllUsers, getUser } = require('../controllers/userControllers');

router.route('/:id').get(getUser);

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

router.use(protect);
router.route('/').get(restrictTo('admin'), getAllUsers);

module.exports = router;
