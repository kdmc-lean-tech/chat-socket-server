const { refreshService } = require('../../services/refresh/refresh');

exports.refreshController = async(req, res) => {
  return refreshService(req, res);
}
