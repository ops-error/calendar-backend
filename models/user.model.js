const { required } = require('joi')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 5
    }
});

module.exports = mongoose.model('user', UserSchema)