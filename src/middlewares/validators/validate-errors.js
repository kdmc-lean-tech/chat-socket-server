const { validationResult } = require('express-validator');
const response = require('../response/response');

exports.validateErrorsRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return response.badRequest(res, {
      error: true,
      message: errors.mapped()
    });
  } else {
    next();
  }
}
