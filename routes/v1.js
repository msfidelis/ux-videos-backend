'use strict';

// const passport = require('../configs/passport')();
const tagsController = require('../modules/videos/controllers/tags');
const usersController = require('../modules/users/controllers/users');
const videosController = require('../modules/videos/controllers/videos');
const videosScrapyController = require('../modules/scrapy/controllers/videos');
const channelsScrapyController = require('../modules/scrapy/controllers/channels');

module.exports = (app) => {

    // Garibaldo sync actions
    app.get('/api/v1/scrapy/videos', videosScrapyController.listAction);
    app.post('/api/v1/scrapy/videos', videosScrapyController.createAction);
    app.post('/api/v1/scrapy/videos/:id/accept', videosScrapyController.acceptAction);
    app.delete('/api/v1/scrapy/videos', videosScrapyController.cleanAction); //Temp
    app.delete('/api/v1/scrapy/videos/:id', videosScrapyController.denyAction);

    app.post('/api/v1/scrapy/channels', channelsScrapyController.createAction);

    app.get('/api/v1/tags', tagsController.listAction);
    app.get('/api/v1/videos', videosController.paginateAction);
    app.get('/api/v1/videos/:id', videosController.showAction);
    app.delete('/api/v1/videos', videosController.cleanAction);
    app.delete('/api/v1/videos/:id', videosController.deleteAction);

}
