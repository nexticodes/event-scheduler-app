const Event = require('../../models/event');
const User = require('../../models/user');
const Channel = require('../../models/channel')

module.exports = {
    create,
    getUserEvents,
    updateEvent,
    deleteEvent,
    findEvent
}

async function create(req, res){
    const newEvent = req.body;
    const userId = req.user._id
    newEvent.host = userId;
    newEvent.alias = newEvent.alias.toUpperCase();
    newEvent.active = true;
    newEvent.attendees.push(userId);
    newEvent.channel = await Channel.create({
        participants: newEvent.attendees,
    })
    const event = await Event.create(newEvent);
    await User.addEvent(userId, event);
    res.json(event);
}

async function getUserEvents(req, res){
    const events = await Event.getUserEvents(req.user._id);
    res.json(events);
}

async function updateEvent(req, res){
    const event = await Event.findById(req.body._id);
    await event.updateEvent(req.body);
    res.json(event);
}


async function deleteEvent(req, res) {
    const event = await Event.findByIdAndDelete(req.body._id);
    res.json(event);
}


async function findEvent(req, res) {
    console.log(req.params);
    const event = await Event.findById(req.params.code)
    if (event) res.json(event);
}
