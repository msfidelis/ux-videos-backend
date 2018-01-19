'use strict';

const VideoScrapyService = require('../services/videos');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.createAction = (req, res) => {
    VideoScrapyService
        .createLog(req.body).then(data => res.status(201).json(data))
        .catch(err => res.status(400).json(err));
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.listAction = (req, res) => {

};