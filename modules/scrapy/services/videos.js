'use strict';

const Promise = require('bluebird');

const VideoScrapySchema = require('../models/Videos');
const videoService = require('../../videos/services/videos');
const tagService = require('../../videos/services/tags');

/**
 * 
 */
class VideoScrapyService {

    constructor() {}

    /**
     * Create new Video log from scrapy
     */
    createLog(params) {
        return new VideoScrapySchema(params).save();
    }

    /**
     * Create multiple lgos
     * @param {*} logs 
     */
    createLogBatch(logs) {
        return Promise.all(logs.map(log => new VideoScrapySchema(log).save()));
    }

    /**
     * Find using id
     * @param {*} id 
     */
    findLogById(id) {
        return VideoScrapySchema.findById(id);
    }

    /**
     * List all available logs from Garibaldo Collector
     */
    listLogs(params) {
        return VideoScrapySchema.find({});
    }

    /**
     * Remove all logs
     */
    cleanLogs() {
        return VideoScrapySchema.remove({});
    }

    /**
     * Remove log identified by id
     * @param {*} id 
     */
    denyLog(id) {
        return VideoScrapySchema.findByIdAndRemove({ _id: id });
    }


    /**
     * Accept log by id
     * @param {*} id 
     */
    acceptLogAsVideo(id) {

        return new Promise((resolve, reject) => {

            this.findLogById(id)
                .then(log => {

                    const infos = {
                        title: log.title,
                        channel_link: log.channel_link,
                        channel_name: log.channel_name,
                        link: log.link,
                        thumbnail: log.thumbnail,
                        tags: log.tags
                    };

                    Promise.all([
                            videoService.createNewVideo(infos),
                            tagService.parseTags(log.tags),
                            this.denyLog(id),
                        ])
                        .then(success => resolve(success))
                        .catch(err => reject(err));

                })
                .catch(err => reject(err));

        });

    };

}


module.exports = new VideoScrapyService();