const mongoose = require('mongoose');

const EventsSchema = new mongoose.Schema({
    goldPassStart: {
        type: mongoose.SchemaTypes.String,
        required: false,
    },
    goldPassEnd: {
        type: mongoose.SchemaTypes.String,
        required: false,
    },
})

module.exports = mongoose.model('Events', EventsSchema)