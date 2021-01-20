const jwt = require('jsonwebtoken');

exports.generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h'}, (err, token) => {
      err ? reject(`Error generating the token.`) : resolve(token);
    });
  });
}

exports.verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
}
