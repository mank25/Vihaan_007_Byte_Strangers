const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        uniqiue: true,
    },

    email: {
        type: String,
        required: true,
        uniqiue: true,
    },
    password: {
        type: String,
        required: true,

    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }


}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);