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
    const newEvent = req.body.eventDetails;
    const eventLocation = req.body.locationDetails;
    const userId = req.user._id
    const latLng = await getLongLat(`${eventLocation.address} ${eventLocation.city} ${eventLocation.state} `)
    eventLocation.lat = latLng.lat;
    eventLocation.lng = latLng.lng;
    newEvent.host = userId;
    newEvent.location = eventLocation;
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
    const event = await Event.findById(req.params.code).populate('attendees');
    res.json(event);
}


async function joinEvent(req, res) {
    const event = await Event.findById(req.body.eventId)
    const user = await User.findById(req.body.userId);
    await User.addEvent(req.body.userId, event);
    await event.addUserToEvent(user._id)
    const newEvent = await Event.findById(req.body.eventId).populate('attendees');
    res.json(newEvent);
}

// helper
async function getLongLat(location){
    const longLat = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GOOGLE_API_KEY}`);
    return longLat.data.results[0].geometry.location
}