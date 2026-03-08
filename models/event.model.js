const { required } = require('joi');
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    startDate: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: false,
    },
    endDate: {
        type: Date,
        required: false,
    },
    endTime: {
        type: Date,
        required: false,
    },
    isShift: {
        type: Boolean,
        required: true
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

module.exports = mongoose.model('event', EventSchema);