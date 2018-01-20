'use strict';

const TagSchema = require('../models/Tags');

/**
 * Verify if tag exists and create
 * @param {*} tags 
 */
module.exports.parseTags = tags => {

    console.log(tags);

    tags.map(tag => {

        TagSchema.find({tag: tag}).then(result => {
            console.log(result, tag);
            if (result === null || result.length === 0) this.createTag(tag);
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
module.exports.createTag = tag => {
    console.log("criando tag");
    return new TagSchema({tag: tag}).save()
}