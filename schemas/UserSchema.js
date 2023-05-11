const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: mongoose.SchemaTypes.String,
    discordId: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    clash: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    clashUser: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },    
})

module.exports = mongoose.model('Users', UserSchema)