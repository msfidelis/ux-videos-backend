'use strict';

const mongo = require('../config/mongo');

const scrapyChannelSchema = mongo.Schema({
    channel: { type: String, required: true, trim: true },
    link: { type: String, required: true, trim: true },
    tags: { type: Array, default: [] },
    updated_at: { type: Date, default: Date.now },
});

const model = mongo.model('ScrapyChannel', scrapyChannelSchema);

module.exports = model;