'use strict';

const TagsService = require('../services/tags');

/**
 * List Index Action
 * @param {*} req 
 * @param {*} res 
 */
module.exports.listAction = (req, res) => TagsService.listTags().then(results => res.status(200).json(results));