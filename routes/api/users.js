const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/', usersCtrl.create);

// GET /api/users
router.post('/login', usersCtrl.login)

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

router.get('/refresh', usersCtrl.getUpdatedUser);

module.exports = router;