'use strict';

// const passport = require('../configs/passport')();
const usersController = require('../modules/users/controllers/users');
const videosScrapyController = require('../modules/scrapy/controllers/videos');
const channelsScrapyController = require('../modules/scrapy/controllers/channels');

module.exports = (app) => {
    app.post('/api/v1/scrapy/videos', videosScrapyController.createAction);
    app.post('/api/v1/scrapy/channels', channelsScrapyController.createAction);
}

// class Routes {

//     constructor() {}

//     initRoutes(app) {

//         app.post('/api/v1/scrapy/videos', videosScrapyController.createAction);
//         app.post('/api/v1/scrapy/channels', channelsScrapyController.createAction);

//     }

// }


// module.exports = new Routes();