'use strict';

const VideosService = require('../services/videos');

/**
 * Pagination Index Action
 * @param {*} req 
 * @param {*} res 
 */
module.exports.paginate = (req, res) => {

    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    const options = {
        limit: limit,
        page: page
    };

    const query = {};

    if (req.query.tags) {
        query.tags = req.query.tags;
    }

    if (req.query.title) {
        query.title = new RegExp(`${req.query.title}`, "i");
    }

    if (req.query.channel_name) {
        query.channel_name = new RegExp(`${req.query.channel_name}`, "i");
    }

    VideosService
        .videosPagination(query, options)
        .then(results => res.status(200).json(results))
        .catch(err => res.status(500).json(err));
};

module.exports.clean = (req, res) => {
    VideosService
    .cleanVideos()
    .then(result => res.status(204).json({}))
    .catch(err => res.status(500).json(err));
}