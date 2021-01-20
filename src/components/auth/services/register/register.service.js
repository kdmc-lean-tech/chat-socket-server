const User = require('../../models/user.model');
const httpResponse = require('../../../../middlewares/response/response');
const { encryptPassword } = require('../../../../utils/encrypt/encrypt.utils');
const { generateToken } = require('../../../../utils/jwt/jwt.utils');

exports.registerService = async(model, res) => {
  const { email, password } = model;
  const userExist = await User.findOne({ email });
  if (userExist) {
    return httpResponse.badRequest(res, `There is already a registered user with this email.`);
  } 
  model.password = encryptPassword(password);
  const user = new User(model);
  try {
    await user.save();
    const token = await generateToken({ user });
    return httpResponse.created(res, { user, token });
  } catch (error) {
    return httpResponse.internalServerError(res, `Internal Server Error.`);
  }
}
