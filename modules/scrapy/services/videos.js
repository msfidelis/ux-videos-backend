'use strict';

const VideoScrapySchema = require('../models/Videos');

class VideoScrapyService {

    constructor() {}

    createLog(params) {
        return new VideoScrapySchema(params).save();
    }

    deleteLog(id) {
        return VideoScrapySchema.findByIdAndRemove(id);
    }

}


module.exports = new VideoScrapyService();