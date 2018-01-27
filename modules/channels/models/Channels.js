'use strict';

const mongo = require('../../../config/mongo');
const pagination = require('mongoose-paginate');

const channelSchema = mongo.Schema({
    title:  { type: String, required: true, trim: true, unique: true },
    link:   { type: String, trim: true },
    thumbnail: { type: String, trim: true },
    updated_at: { type: Date, default: Date.now },
});

channelSchema.plugin(pagination);

module.exports = mongo.model('Channel', channelSchema);