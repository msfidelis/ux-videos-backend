'use strict';

const scrapyVideosSchema = require('../../../models/scrapy-videos');

module.exports = (app) => {

    app.post('/api/v1/scrapy/videos', (req, res) => {
        res.json({status: "Garibaldo Integration for Videos"});
    });

}