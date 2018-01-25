'use strict';

process.env.MONGO_HOST = '0.0.0.0';
process.env.MONGO_PORT = 27017;
process.env.MONGO_DATABASE = 'ux-videos';


const userService = require('../modules/users/services/users');

const default_user = {

};