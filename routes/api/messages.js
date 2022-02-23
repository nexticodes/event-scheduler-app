const express = require('express');
const router = express.Router();
const messagesCtrl = require('../../controllers/api/messages');

// POST /api/messages/channelId
router.post('/:channelId', messagesCtrl.create);

router.get('/:channelId', messagesCtrl.index);


module.exports = router;