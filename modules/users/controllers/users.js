'use strict';

const userService = require('../services/users');

/**
 * Create new User Action
 * @param {*} req 
 * @param {*} res 
 */
module.exports.createAction = (req, res) => {

    userService
        .createUser(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(400).json(err));

};

/**
 * Return a list with all created users
 * @param {*} req 
 * @param {*} res 
 */
module.exports.listAction = (req, res) => {

    userService
        .listUsers()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json(err));

};

/**
 * Detail a user
 * @param {*} req 
 * @param {*} res 
 */
module.exports.detailAction = (req, res) => {

    userService.detailUser(req.params.id)
        .then(user => {
            if (user === null) throw "Not found";
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(404).json({
                status: 404,
                message: `User not found`
            });
        })

};

/**
 * Change password password
 * @param {*} req 
 * @param {*} res 
 */
module.exports.changePassword = (req, res) => {

};