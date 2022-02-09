const Event = require('../../models/event');
const User = require('../../models/event')
const Channel = require('../../models/channel')

module.exports = {
    create,
    getEvents,
    updateEvent,
    deleteEvent
}

async function create(req, res){
    const newEvent = req.body;
    newEvent.host = req.user._id;
    newEvent.active = true;
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

async function updateEvent(req, res){
    const event = await Event.findById(req.body._id);
    await event.updateEvent(req.body);
    res.json(event);
}

async function deleteEvent(req, res) {
    const event = await Event.findByIdAndDelete(req.body._id);
    res.json(event);
}