const httpResponse = require('../../../middlewares/response/response');
const Message = require('../models/message.model');

exports.messageService = async(req, res) => {
  const { uid } = req.uid_user.user;
  const messageOf = req.params.of;

  const messages = await Message.find({
    $or: [
      { of: uid, to: messageOf },
      { of: messageOf, to: uid }
    ]
  })
  .sort({ createdAt: 'desc' })
  .limit(30);
  httpResponse.ok(res, { messages });
}
