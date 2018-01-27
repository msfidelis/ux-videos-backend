'use strict';

const mongo = require('../../../config/mongo');

const TagSchema = mongo.Schema({
    tag: { type: String, required: true, trim: true, unique: true },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongo.model('Tag', TagSchema);