const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    content: { type: String, maxlength=255 }
}, {
    timestamps: true
})

module.exports = mongoose.model('Message', messageSchema);