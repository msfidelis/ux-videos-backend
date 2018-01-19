'use strict';

const userSchema = require('../../../models/Users');

module.exports = (app) => {

    app.post('/api/v1/users', (req, res) => {
        const log = req.body;
        res.status(201).json(log);
    });

}