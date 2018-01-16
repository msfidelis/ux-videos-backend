'use strict';

const mongo = require('../config/mongo');

const scrapyVideoSchema = mongo.Schema({
    title: { type: String, required: true, trim: true },
    channel: { type: String, required: true, trim: true },
    link: { type: String, required: true, trim: true },
    tags: { type: Array, default: [] },
    updated_at: { type: Date, default: Date.now },
});

const model = mongo.model('ScrapyVideo', scrapyVideoSchema);

module.exports = model;