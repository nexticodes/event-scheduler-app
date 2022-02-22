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


channelSchema.methods.addMessage = async function addMessage(message){
    const channel = this;
    channel.messages.push(message);
    return channel.save();
}

module.exports = mongoose.model('Channel', channelSchema);