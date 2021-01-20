const User = require('../../models/user.model');
const { comparePasswords } = require('../../../../utils/encrypt/encrypt.utils');
const httpResponse = require('../../../../middlewares/response/response');
const { generateToken } = require('../../../../utils/jwt/jwt.utils');

exports.loginService = async(model, res) => {
  const { email, password } = model;
  const user = await User.findOne({ email });
  if (!user) {
    return httpResponse.badRequest(res, `Email or password incorrect.`);
  }
  const validPassword = comparePasswords(password, user.password);
  if (!validPassword) {
    return httpResponse.badRequest(res, `Email or password incorrect.`);
  }
  const token = await generateToken({ user });
  return httpResponse.ok(res, { user, token });
}
