const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const bcrypt = require('bcrypt');
const { events } = require('./event');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    },
    events : [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ],
    coins: {type: Number, default: 10},
    numFlakesLifetime: {
        type: Number,
        default: 0,
    },
    numEventsLifetime: {
        type: Number,
        default: 0
    }
},{
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret
        }
    }
});

userSchema.pre('save', async function(next) {
    // 'this' is the user doc.
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
})

userSchema.statics.addEvent = async function(id, event){
    await this.findByIdAndUpdate(id, {
        $push: { 'events': event},
        $inc: { 'numEventsLifetime': 1,
                'coins': -event.coverFee,
            },
    });
}

userSchema.statics.leaveEvent = async function(id, event) {
    await this.findByIdAndUpdate(id, {
        $pull: {
            'events': event._id,
        },
        $inc: {
            'numFlakesLifetime': 1
        }
    });
};

module.exports = mongoose.model('User', userSchema);