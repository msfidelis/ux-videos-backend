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
     * List active users
     */
    listUsers() {
        return UsersSchema.find({ enabled: true }).select("name email");
    }

    /**
     * Detail user infos
     * @param {*} id 
     */
    detailUser(id) {
        return UsersSchema.findById({ _id: id });
    }

    /**
     * Detail user by email
     * @param {*} email 
     */
    findUserByEmail(email) {
        return UsersSchema.findOne({ email: email }).select('_id name email password');
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
        return UsersSchema.findByIdAndRemove({ _id: id });
    }


    /**
     * Delete all users
     */
    deleteUsers() {
        return UsersSchema.remove({});
    }


}

module.exports = new UserService();