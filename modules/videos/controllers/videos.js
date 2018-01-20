'use strict';

const VideosService = require('../services/videos');

/**
 * Pagination Index Action
 * @param {*} req 
 * @param {*} res 
 */
module.exports.paginate = (req, res) => {
    VideosService
    .videosPagination()
    .then(results => res.status(200).json(results))
    .catch(err => res.status(500).json(err));
};

module.exports.clean = (req, res) => {
    VideosService
    .cleanVideos()
    .then(result => res.status(204).json({}))
    .catch(err => res.status(500).json(err));
}