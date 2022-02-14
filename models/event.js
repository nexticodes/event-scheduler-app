const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true, maxLength: 50 },
    host: {type: Schema.Types.ObjectId, ref: 'User'},
    alias: {type: String},
    eventDate: {type: Date},
    location: { 
        name: {type: String, maxLength: 15},
        address: {type: String, maxLength: 100},
        city: {type: String, maxLength: 100},
        state: {type: String},
        zip: {type: String},
        lat: {type: Number},
        lng: {type: Number}
    },
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
    const user = await mongoose.model('User').findById(userId).populate('events').populate({path: 'events', populate: 'attendees'});
    return user.events;
};

eventSchema.methods.updateEvent = async function(newEventInfo){
    const event = await mongoose.model('Event').findOneAndUpdate({_id: newEventInfo._id}, newEventInfo)
    return event.save();
};

eventSchema.methods.addUserToEvent = async function(userId){
    const event = this;
    event.attendees.push(userId);
    return event.save();
}

eventSchema.methods.removeUserFromEvent = async function(userId) {
    const event = this;
    const newAttendeesList = event.attendees.filter(a => !a.equals(userId))
    console.log(newAttendeesList);
    event.attendees = newAttendeesList;
    return event.save();
}

module.exports = mongoose.model('Event', eventSchema);