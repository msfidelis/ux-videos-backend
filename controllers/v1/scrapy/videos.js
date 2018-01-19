'use strict';

const scrapyVideosSchema = require('../../../models/ScrapyVideos');

module.exports = (app) => {

    app.post('/api/v1/scrapy/videos', (req, res) => {

        const log = req.body;

        new scrapyVideosSchema(log).save()
            .then(newLog => {
                res.status(201).json(newLog);
            }).catch(err => {
                res.status(400).json(err);
            });

    });

    app.get('/api/v1/scrapy/videos', (req, res) => {

        scrapyVideosSchema.find({}).then(results => {
            res.json(results);
        }).catch(err => {
            res.json(err);
        });

    });

}