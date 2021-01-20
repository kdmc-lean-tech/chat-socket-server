const { loginService } = require('../../services/login/login.service');

exports.loginController = async(req, res) => {
  const model = req.body;
  return loginService(model, res);
}
