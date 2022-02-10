const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');

// POST /api/events CREATE
router.post('/', eventsCtrl.create);

// GET /api/events
router.get('/', eventsCtrl.getUserEvents);

router.put('/update', eventsCtrl.updateEvent);

// DELETE an event
router.delete('/delete', eventsCtrl.deleteEvent);

// FIND a single event
router.get('/find/:code', eventsCtrl.findEvent)

// PUT / UPDATE event participants.
router.put('/join', eventsCtrl.joinEvent);

module.exports = router;