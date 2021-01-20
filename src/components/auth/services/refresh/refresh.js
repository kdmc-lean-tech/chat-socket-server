const User = require('../../models/user.model');
const httpResponse = require('../../../../middlewares/response/response');
const { generateToken } = require('../../../../utils/jwt/jwt.utils');

exports.refreshService = async(req, res) => {
  const { uid } = req.uid_user.user;
  const user = await User.findOne({ _id: uid });
  if (!user) {
    return httpResponse.notFound(res, user);
  }
  const token = await generateToken({ user });
  httpResponse.ok(res, { user, token });
}
