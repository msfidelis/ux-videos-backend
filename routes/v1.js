'use strict';

const passport                  = require('../config/passport');

const authController            = require('../modules/users/controllers/auth');
const tagsController            = require('../modules/videos/controllers/tags');
const usersController           = require('../modules/users/controllers/users');
const videosController          = require('../modules/videos/controllers/videos');
const videosScrapyController    = require('../modules/scrapy/controllers/videos');
const channelsScrapyController  = require('../modules/scrapy/controllers/channels');

module.exports = (app) => {

    // Garibaldo sync actions
    app.get('/api/v1/scrapy/videos', videosScrapyController.listAction);
    app.post('/api/v1/scrapy/videos', videosScrapyController.createAction);
    app.post('/api/v1/scrapy/videos/:id/accept', videosScrapyController.acceptAction);
    app.delete('/api/v1/scrapy/videos', videosScrapyController.cleanAction); //Temp
    app.delete('/api/v1/scrapy/videos/:id', videosScrapyController.denyAction);

    app.post('/api/v1/scrapy/channels', channelsScrapyController.createAction);

    // Videos Routes
    app.get('/api/v1/tags', tagsController.listAction);
    app.get('/api/v1/videos', videosController.paginateAction);
    app.get('/api/v1/videos/:id', videosController.showAction);
    app.delete('/api/v1/videos', passport.authenticate('jwt'), videosController.cleanAction);
    app.delete('/api/v1/videos/:id', passport.authenticate('jwt'), videosController.deleteAction);

    // Users routes
    app.post('/api/v1/users', passport.authenticate('jwt'), usersController.createAction);
    app.delete('/api/v1/users', passport.authenticate('jwt'), usersController.cleanAction);
    app.put('/api/v1/users/:id/changepassword', passport.authenticate('jwt'), usersController.changePassword);
    app.get('/api/v1/users', passport.authenticate('jwt'), usersController.listAction);
    app.get('/api/v1/users/:id', passport.authenticate('jwt'), usersController.detailAction);

    app.post('/api/v1/users/auth', authController.authAction);


}