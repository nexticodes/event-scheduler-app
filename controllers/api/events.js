const Event = require('../../models/event');
const User = require('../../models/user');
const Channel = require('../../models/channel')
const axios = require('axios');

module.exports = {
    create,
    getUserEvents,
    updateEvent,
    deleteEvent,
    findEvent,
    joinEvent,
    getLongLat
}

async function create(req, res){
    const newEvent = req.body;
    const userId = req.user._id
    const {lat, lng} = await getLongLat(`${newEvent.location.address} ${newEvent.location.city} ${newEvent.location.state} `)
    newEvent.host = userId;
    newEvent.location.lat = lat;
    newEvent.location.lng = lng;
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
    const event = await Event.findById(req.params.code)
    res.json(event);
}


async function joinEvent(req, res) {
    const event = await Event.findById(req.body.eventId);
    const user = await User.findById(req.body.userId);
    await event.addUserToEvent(user._id);
    await User.addEvent(req.body.userId, event);
    res.json(event);
}

// helper
async function getLongLat(location){
    const longLat = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GOOGLE_API_KEY}`);
    return longLat.data.results[0].geometry.location
}