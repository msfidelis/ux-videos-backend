'use strict';

const videoSchema = require('../models/Videos');

/**
 * Register a new Video and parse tags
 * @param {*} params 
 */
module.exports.createNewVideo = params => new videoSchema(params).save();


/**
 * Find video by id
 * @param {*} id 
 */
module.exports.findVideoById = id => videoSchema.findById({_id: id});

/**
 * Update video
 * @param {*} id 
 * @param {*} params 
 */
module.exports.updateVideo = (id, params) => {};

/**
 * Paginate videos list
 * @param {*} query 
 * @param {*} options 
 */
module.exports.videosPagination = (query = {}, options = {}) => videoSchema.paginate(query, options);


/**
 * Paginate videos using redis cache
 * @param {*} query 
 * @param {*} options 
 */
module.exports.videosPaginationWithCache = (query, options) => {};

/**
 * Delete video using id
 * @param {*} id 
 */
module.exports.deleteVideoById = id => videoSchema.findByIdAndRemove({_id: id});

/**
 * Delete all videos 
 * Use only in dev mode
 */
module.exports.cleanVideos = () => videoSchema.remove({});
