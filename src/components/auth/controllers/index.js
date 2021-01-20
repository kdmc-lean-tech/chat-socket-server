const { loginController } = require('./login/login.controller');
const { refreshController } = require('./refresh/refresh.controller');
const { registerController } = require('./register/register.controller');

module.exports = {
  loginController,
  refreshController,
  registerController
}
