'use strict';

process.env.MONGO_HOST = '0.0.0.0';
process.env.MONGO_PORT = 27017;
process.env.MONGO_DATABASE = 'ux-videos';

const userService = require('../modules/users/services/users');
const videosService = require('../modules/videos/services/videos');
const tagsService = require('../modules/videos/services/tags');
const scrapyVideoService = require('../modules/scrapy/services/videos');


Promise.all([
    userService.deleteUsers(),
    videosService.cleanVideos(),
    tagsService.cleanTags(),
    scrapyVideoService.cleanLogs()
]).then(sucess => {
    console.log("Database reseted");
    process.exit();
}).catch(err => {
    process.exit(1);
})