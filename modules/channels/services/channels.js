'use strict';

const channelSchema = require('../models/Channels');

module.exports.createChannel = (params) => new channelSchema(params).save();

module.exports.listChannels = (params) => channelSchema.find({});

module.exports.listWithPagination = (query = {}, options = {}) => {};

/**
 * Create channel if not exists;
 * @param {*} title 
 */
module.exports.parseChannel = channel => {

    channelSchema.find({ title: channel.title }).then(result => {
        if (result === null || result.length === 0)  {
            return this.createChannel(channel);
        } else {
            return true;
        }
    });

};