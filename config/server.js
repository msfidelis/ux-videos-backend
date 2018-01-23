'use strict';

const express       = require('express');
const consign       = require('consign');
const bodyParser    = require('body-parser');
const validator     = require('express-validator');
const morgan        = require('morgan');
const passport      = require('./passport');

module.exports = () => {

    const app = express()

    app.use(passport.initialize());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(validator());

    consign()
        .include('routes')
        .into(app);

    return app;
}