const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    address: {type: String, maxlength=100, required: true},
    city: {type: String, maxlength=100},
    state: {type: String, maxlength=2},
    zip: {type: String},
    longlat: {
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
    title: { type: String, required: true, maxlength=50 },
    host: {type: Schema.Types.ObjectId, ref: 'User'},
    eventDate: {type: Date},
    location: { locationSchema },
    eventTime:{type: String},
    coverFee: Number,
    attendees: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    active: Boolean,
    gracePeriod: Date,
    finalWarning: Date,
    channel: {
        type: Schema.Types.ObjectId,
        ref: 'Channel'
    },
},{
    timestamps: true
});

module.exports = mongoose.model('User', eventSchema);