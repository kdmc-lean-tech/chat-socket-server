const { Router } = require('express');
const { loginController, refreshController, registerController } = require('./controllers/index');
const { validateErrorsRequest } = require('../../middlewares/validators/validate-errors');
const { check } = require('express-validator');
const { verifyUser } = require('../../middlewares/verify-user/verify-user');

const router = Router();

router.post('/login', [
  check('email', 'The email is not valid').isEmail(),
  check('email', 'The email is mandatory').not().isEmpty(),
  check('password', 'The password is mandatory').not().isEmpty(),
  validateErrorsRequest
], loginController);

router.post('/register', [
  check('email', 'The email is not valid').isEmail(),
  check('email', 'The email is mandatory').not().isEmpty(),
  check('password', 'The password is mandatory').not().isEmpty(),
  check('name', 'The username is mandatory').not().isEmpty(),
  validateErrorsRequest
], registerController);

router.get('/refresh', [
  verifyUser
], refreshController);

module.exports = router;
