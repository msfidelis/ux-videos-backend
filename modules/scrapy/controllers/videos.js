'use strict';

const VideoScrapyService = require('../services/videos');

/**
 * Create a new Video Log from Garibaldo Search
 * @param {*} req 
 * @param {*} res 
 */
module.exports.createAction = (req, res) => {
    VideoScrapyService
        .createLog(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => res.status(400).json(err));
};
/**
 * List available logs do analyzed
 * @param {*} req 
 * @param {*} res 
 */
module.exports.listAction = (req, res) => {
    VideoScrapyService
        .listLogs()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
};
/**
 * Deny video from logs
 * @param {*} req 
 * @param {*} res 
 */
module.exports.denyAction = (req, res) => {
    VideoScrapyService
        .denyLog(req.params.id)
        .then(success => res.status(200).json({ msg: `log ${req.params.id} denied and removed` }))
        .catch(err => res.status(500).json(err));
}

/**
 * Accept video from logs and move to production
 * videos list
 * @param {*} req 
 * @param {*} res 
 */
module.exports.acceptAction = (req, res) => {

};