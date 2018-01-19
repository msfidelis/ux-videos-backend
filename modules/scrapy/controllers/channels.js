'use strict';

const channelScrapyService = require('../services/channels');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.createAction = (req, res) => {
    channelScrapyService
        .createLog(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => res.status(400).json(err));
};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.listAction = (req, res) => {
    channelScrapyService
        .listLogs()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.denyAction = (req, res) => {
    channelScrapyService
        .denyLog(req.params.id)
        .then(success => res.status(200).json({ msg: `channel ${req.params.id} has been denied and removed` }))
        .catch(err => res.status(500).json(err));
}

module.exports.acceptAction = (req, res) => {

};