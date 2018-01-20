'use strict';

const VideosService = require('../services/videos');

/**
 * Pagination Index Action
 * @param {*} req 
 * @param {*} res 
 */
module.exports.paginateAction = (req, res) => {

    const page = req.query.page || 1;
    const limit = req.query.limit || 40;

    const options = {
        limit: limit,
        page: page
    };

    const query = {};

    if (req.query.tags) {
        query.tags = new RegExp(`^${req.query.tags}$`, "i");
    }
    
    if (req.query.tag) {
        query.tags = new RegExp(`^${req.query.tag}$`, "i");
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

module.exports.cleanAction = (req, res) => {
    VideosService
        .cleanVideos()
        .then(result => res.status(204).json({}))
        .catch(err => res.status(500).json(err));
};

module.exports.showAction = (req, res) => {

    VideosService.findVideoById(req.params.id)
    .then(video => {
        if (video === null) throw "Not found";
        res.status(200).json(video);
    }).catch(err => {
        res.status(404).json({
            status: 404,
            message: `Video not found`
        });
    });

};

module.exports.deleteAction = (req, res) => {

    const id = req.params.id;

    VideosService.findVideoById(id)
    .then(video => {
        if (video === null) throw "Not found";
        VideosService
            .deleteVideoById(id)
            .then(success => res.status(204).json())
            .catch(err => res.status(500).json(err));
    }).catch(err => {
        res.status(404).json({
            status: 404,
            message: `Video not found`
        });
    })

    VideosService.deleteVideoById(req.params.id);
}