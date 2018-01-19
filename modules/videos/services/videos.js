'use strict';

/**
 * Register a new Video and parse tags
 * @param {*} params 
 */
module.exports.createNewVideo = params => {};

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
module.exports.videosPagination = (query, options) => {};

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
module.exports.deleteVideoById = id => {};
