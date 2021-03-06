const Message = require('./../../models/message');
const Channel = require('./../../models/channel');

module.exports = {
    create,
    index
}

async function create(req, res){
    const newMessage = await Message.create({user: req.body.userId, content: req.body.message});
    const channel = await Channel.findById(req.params.channelId);
    await channel.addMessage(newMessage);
    res.json('Message Sent');
}

async function index(req, res){
    const channel = await Channel.findById(req.params.channelId).populate('messages');
    res.json(channel.messages);
}