const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken,
    getUpdatedUser
}


async function create(req, res){
    try {
        // Add the user to the db
        const user = await User.create(req.body);
        // Create a token using 'user' obj
        // Token is string!
        const token = createJWT(user);
        res.json(token);
    } catch(err) {
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
        // Get user from database
        const user = await User.findOne({email:req.body.email});
        if (!user) throw new Error('Couldn\'t find user.');
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!user) throw new Error('Invalid credentials.');
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
}

function checkToken (req,res) {
    res.json(req.exp);
}

async function getUpdatedUser(req, res) {
    const user = await User.findById(req.user._id);
    res.json(user);
}

// Helper functions

function createJWT(user){
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}