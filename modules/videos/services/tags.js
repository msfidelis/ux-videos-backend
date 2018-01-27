'use strict';

const TagSchema = require('../models/Tags');

/**
 * Verify if tag exists and create
 * @param {*} tags 
 */
module.exports.parseTags = tags => {

    tags.map(tag => {

        TagSchema.find({ tag: tag }).then(result => {
            if (result === null || result.length === 0)  {
                return this.createTag(tag);
            } else {
                return true;
            }
        });

    });

};

/**
 * List all tags registered
 */
module.exports.listTags = () => TagSchema.find({});

/**
 * Delete tag using name
 * @param {*} tag 
 */
module.exports.deleteTag = tag => {};

/**
 * Create a new tag
 * @param {*} tag 
 */
module.exports.createTag = tag => new TagSchema({ tag: tag }).save();

/**
 * Delete all tags.
 * Use only in development mode
 */
module.exports.cleanTags = () => TagSchema.remove({});