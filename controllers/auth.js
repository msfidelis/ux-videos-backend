'use strict';

module.exports = (app) => {

    app.post('/api/v1/scrapy/channels', (req, res) => {

        const log = req.body;

        new scrapyChannelSchema(log).save()
            .then(newLog => {
                res.status(201).json(newLog);
            }).catch(err => {
                res.status(400).json(err);
            });

    });
}