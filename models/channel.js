const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const channelSchema = new Schema({
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
},{
    timestamps: true
});

channelSchema.methods.addUser = async (userId) => {
    const channel = this;
    channel.participants.push(userId);
    return channel.save();
}

module.exports = mongoose.model('Channel', channelSchema);