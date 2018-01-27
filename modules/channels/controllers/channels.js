'use strict';

const channelsService = require('../services/channels');

module.exports.listAction = (req, res) => {

    channelsService.listChannels()
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json(err));
        
};