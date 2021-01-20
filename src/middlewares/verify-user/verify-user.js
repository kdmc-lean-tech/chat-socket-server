const httpResponse = require('../response/response');
const { verifyToken } = require('../../utils/jwt/jwt.utils');

exports.verifyUser = (req, res, next) => {
  const token = req.header('token');
  if (!token) {
    return httpResponse.unauthorized(res, `Invalid Token`);
  }
  try {  
    const payload = verifyToken(token);
    req.uid_user = payload;
    next();
  } catch (error) {
    return httpResponse.unauthorized(res, `It's not authorized.`);
  }
}
