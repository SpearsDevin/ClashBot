const mongoose = require('mongoose');

const ClanLinkSchema = new mongoose.Schema({
    channel: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    clan: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    clanName:{
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    serverId: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    war: {
        type: mongoose.SchemaTypes.String,
        required: false,
    },
})

module.exports = mongoose.model('Clans', ClanLinkSchema)