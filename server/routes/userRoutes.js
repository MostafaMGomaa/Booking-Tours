const router = require('express').Router();

const {
  signup,
  login,
  forgotPassword,
  resetPassword,
} = require('../controllers/authControllers');

const { getAllUsers, getUser } = require('../controllers/userControllers');

router.route('/').get(getAllUsers);
router.route('/:id').get(getUser);

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

module.exports = router;
