'use strict';

const UsersSchema = require('../models/Users');

class UserService {

    constructor() {}

    /**
     * Create a new user
     * @param {*} params 
     */
    createUser(params) {
        return new UsersSchema(params).save();
    }

    /**
     * List users
     */
    listUsers() {
        return UsersSchema.find({});
    }

    /**
     * Detail user infos
     * @param {*} id 
     */
    detailUser(id) {
        return UsersSchema.findById({ _id: id });
    }

    /**
     * Change user password
     * @param {*} id 
     * @param {*} oldPasswd 
     * @param {*} newPasswd 
     */
    changePassword(id, oldPasswd, newPasswd) {

    }

    /**
     * Disable users
     * @param {*} id 
     */
    disableUser(id) {
        return UsersSchema.findByIdAndRemove({ _id: id })
    }


}

module.exports = new UserService();