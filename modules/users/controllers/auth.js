'use strict';

const authService = require('../services/auth');

/**
 * Generate a JWT Token
 * @param {*} req 
 * @param {*} res 
 */
module.exports.authAction = (req, res) => {

    if (!req.body.email || !req.body.password) {
        res.status(401).json({
            status: 401,
            message: "invalid username/password"
        });
    } 

    authService
        .authenticate(req.body.email, req.body.password)
        .then(token => res.status(200).json(token))
        .catch(err => {

            console.log(err);

            res.status(401).json({
                status: 401, 
                message: 'invalid username/password'
            })

        });

};