const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');

// POST /api/events CREATE
router.post('/', eventsCtrl.create);

module.exports = router;