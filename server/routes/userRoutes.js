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
  getAllUsers,
  getUser,
  getMe,
  deleteMe,
  updateUserData,
} = require('../controllers/userControllers');

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
router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

router.use(protect);
router.patch('/updateMyPassword', updatePassword);

/**
 * @swagger
 * /api/v1/users/:
 *  get:
 *    tags: [Users]
 *    summary: Return the List of Users
 *    responses:
 *      200:
 *        description: Return All Users.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/User'
 *
 */

router.route('/').get(restrictTo('admin'), getAllUsers);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 */

router.use(restrictTo('user'));

router.route('/me').get(getMe, getUser).delete(deleteMe);
router.route('/:id').get(getUser);
router.patch('/updateUserData', updateUserData);

module.exports = router;
