const { Router } = require('express');
const { messageController } = require('./controllers/message.controller');
const { verifyUser } = require('../../middlewares/verify-user/verify-user');
const router = Router();

router.get('/:of', [ verifyUser ], messageController);

module.exports = router;
