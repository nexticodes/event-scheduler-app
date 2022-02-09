const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');

// POST /api/events CREATE
router.post('/', eventsCtrl.create);

// GET /api/events
router.get('/', eventsCtrl.getEvents);

router.put('/update', eventsCtrl.updateEvent);

// DELETE an event
router.delete('/delete', eventsCtrl.deleteEvent);

module.exports = router;