const httpStatus = require('http-status-codes');

exports.created = (res, body=null) => {
  return res.status(201).json({
    error: false,
    status: httpStatus.StatusCodes.CREATED,
    body
  });
}

exports.ok = (res, body=null) => {
  return res.status(200).json({
    error: false,
    status: httpStatus.StatusCodes.OK,
    body
  });
} 

exports.internalServerError = (res, body=null) => {
  return res.status(500).json({
    error: true,
    status: httpStatus.StatusCodes.INTERNAL_SERVER_ERROR,
    body
  });
};

exports.notFound = (res, body=null) => {
  return res.status(404).json({
    error: true,
    status: httpStatus.StatusCodes.NOT_FOUND,
    body
  });
};

exports.badRequest = (res, body=null) => {
  return res.status(400).json({
    error: true,
    status: httpStatus.StatusCodes.BAD_REQUEST,
    body
  });
};

exports.unauthorized = (res, body=null) => {
  return res.status(401).json({
    error: true,
    status: httpStatus.StatusCodes.UNAUTHORIZED,
    body
  });
}
