const Event = require('../../models/event');
const User = require('../../models/event')
const Channel = require('../../models/channel')

module.exports = {
    create,
    getEvents
}

async function create(req, res){
    const newEvent = req.body;
    newEvent.host = req.user._id;
    newEvent.attendees.push(req.user._id);
    newEvent.channel = await Channel.create({
        participants: newEvent.attendees,
    })
    const events = await Event.create(newEvent);
    res.json(events);
}

async function getEvents(req, res){
    const events = await User.getEvents(req.user._id);
    res.json(events);
}