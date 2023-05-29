const router = require('express').Router();

const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  protect,
  restrictTo,
  logout,
  updatePassword,
} = require('../controllers/authControllers');

const {
  deleteAll,
  getAllUsers,
  getUser,
  getMe,
  deleteMe,
  updateUserData,
} = require('../controllers/userControllers');

const { s3Uploadv2, upload } = require('../controllers/imageController');
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - name
 *        - email
 *        - password
 *        - passwordConfirm
 *      properties:
 *        id:
 *          type: mongoId
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        password:
 *          type: string
 *        passwordConfirm:
 *          type: string
 *        photo:
 *          type: string
 *        role:
 *          type: string
 *        passwordChangedAt:
 *          type: date
 *        passwordResetToken:
 *          type: string
 *        passwordResetExpires:
 *          type: date
 *        active:
 *          type: boolean
 *      example:
 *       id: 52454
 *       name: Mostafa
 *       email: ms@hello.com
 *       photo: default.png
 *       role: user
 *
 *
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: The users manging api including Auth functions
 */

// Auth

// !TODO: DELTE THIS BEFORE DEPLOY
// FOR DEV ONLY
router.delete('/all', deleteAll);

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

router.use(protect);

router.post('/upload', upload.array('file'), async (req, res) => {
  try {
    const results = await s3Uploadv2(req.user.name, req.files[0]);
    console.log(results);
    return res.json({ status: 'success', results });
  } catch (err) {
    console.log(err);
  }
});

router.patch('/updateMyPassword', updatePassword);

router.route('/').get(restrictTo('admin'), getAllUsers);

router.use(restrictTo('user'));

router.route('/me').get(getMe, getUser).delete(deleteMe);
router.route('/:id').get(getUser);
router.patch('/updateUserData', updateUserData);

module.exports = router;
