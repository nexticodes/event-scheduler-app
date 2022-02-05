const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const channelSchema = new Schema({
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages: [{
        type: ObjectId,
        ref: 'Message'
    }]
},{
    timestamps: true
});

module.exports = mongoose.model('Channel', channelSchema);