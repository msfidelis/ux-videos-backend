'use strict';

const VideoScrapySchema = require('../models/Videos');

/**
 * 
 */
class VideoScrapyService {

    constructor() {}

    /**
     * 
     */
    createLog(params) {
        return new VideoScrapySchema(params).save();
    }

    /**
     * 
     */
    listLogs(params) {
        return VideoScrapySchema.find({});
    }

    /**
     * Remove log from the Scrapy results
     * @param {*} id 
     */
    denyLog(id) {
        return VideoScrapySchema.remove({ _id: id });
    }

    /**
     * 
     */
    acceptLogAsVideo(id) {

    };

}


module.exports = new VideoScrapyService();