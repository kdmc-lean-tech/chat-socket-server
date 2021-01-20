const { messageService } = require('../services/message.service');

exports.messageController = async(req, res) => {
  return messageService(req, res);
}
