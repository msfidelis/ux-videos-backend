'use strict';

const userService = require('../services/users');

/**
 * Create new User Action
 * @param {*} req 
 * @param {*} res 
 */
module.exports.createAction = (req, res) => {

    const user = req.body;

    userService
        .findUserByEmail(user.email)
        .then(success => {
            
            if (success !== null) throw "exists";

            userService
                .createUser(req.body)
                .then(user => res.status(201).json(user))
                .catch(err => res.status(400).json(err));

        })
        .catch(err => {
            res.status(400).json({
                status: 400, 
                message: `email ${req.body.email} already exists`
            });
        });

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

/**
 * Clean all users - use in development mode
 * @param {*} req 
 * @param {*} res 
 */
module.exports.cleanAction = (req, res) => {
    userService.deleteUsers()
    .then(success => res.status(204).json(success))
    .catch(err => res.status(500).json({}));
};

/**
 * Disable a user using an id
 * @param {*} req 
 * @param {*} res 
 */
module.exports.disableAction = (req, res) => {

};