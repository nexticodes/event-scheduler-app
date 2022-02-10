const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    address: {type: String, maxLength: 100, required: true},
    city: {type: String, maxLength: 100},
    state: {type: String, maxLength: 2},
    zip: {type: String},
    longLat: {
        long: {
            type: String,
        },
        lat: {
            type: String
        }
    }
},{
    timestamps: true
});

const eventSchema = new Schema({
    title: { type: String, required: true, maxLength: 50 },
    host: {type: Schema.Types.ObjectId, ref: 'User'},
    alias: {type: String},
    eventDate: {type: Date},
    location: { type: String },
    eventTime:{type: String},
    coverFee: Number,
    attendees: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    active: Boolean,
    gracePeriod: Number,
    finalWarning: Number,
    channel: {
        type: Schema.Types.ObjectId,
        ref: 'Channel'
    },
},{
    timestamps: true
});

eventSchema.virtual('eventExpense').get(function(){
    return this.attendees.length * coverFee;
});

eventSchema.statics.getUserEvents = async function(userId) {
    const userEvents = await mongoose.model('Event').find({host: userId});
    return userEvents;
};

eventSchema.methods.updateEvent = async function(newEventInfo){
    const event = await mongoose.model('Event').findOneAndUpdate({_id: newEventInfo._id}, newEventInfo)
    return event.save();
}

module.exports = mongoose.model('Event', eventSchema);