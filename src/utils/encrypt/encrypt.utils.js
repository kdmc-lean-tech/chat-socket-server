const bcryptjs = require('bcryptjs');

exports.encryptPassword = (password) => {
  const salt = bcryptjs.genSaltSync();
  return bcryptjs.hashSync(password, salt);
}

exports.comparePasswords = (passwordClient, passwordDB) => {
  return bcryptjs.compareSync(passwordClient, passwordDB);
}
