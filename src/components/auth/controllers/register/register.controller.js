const { registerService } = require('../../services/register/register.service');

exports.registerController = async(req, res) => {
  const model = req.body;
  return registerService(model, res);
}
