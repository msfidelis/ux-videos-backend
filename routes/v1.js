'use strict';

// const passport = require('../configs/passport')();
const usersController = require('../modules/users/controllers/users');
const videosScrapyController = require('../modules/scrapy/controllers/videos');
const channelsScrapyController = require('../modules/scrapy/controllers/channels');

module.exports = (app) => {
    app.get('/api/v1/scrapy/videos', videosScrapyController.listAction);
    app.post('/api/v1/scrapy/videos', videosScrapyController.createAction);
    app.delete('/api/v1/scrapy/videos/:id', videosScrapyController.denyAction);

    app.post('/api/v1/scrapy/channels', channelsScrapyController.createAction);
}
