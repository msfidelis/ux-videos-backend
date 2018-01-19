'use strict';

const mongo = require('../../../config/mongo');

const VideoSchema = mongo.Schema({
    title: { type: String, required: true, trim: true },
    channel_name: { type: String, trim: true },
    channel_link: { type: String, trim: true },
    link: { type: String, required: true, trim: true },
    thumbnail: { type: String, trim: true },
    tags: { type: Array, default: [] },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongo.model('Video', VideoSchema);