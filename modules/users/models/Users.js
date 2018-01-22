'use strict';

const mongo = require('../config/mongo')
const hash = require('take-my-hash');

const SALT_WORK_FACTOR = 10;

const userSchema = mongo.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    enabled: { type: Boolean, required: true, default: true },
    tardis: { type: String, default: false }
});

userSchema.pre('save', next => {
    let account = this;
    if (!account.isModified('password')) return next();
    account.password = hash.sha256(account.password);
    next();
});

userSchema.methods.comparePassword = (candidatePassword, cb) => {
    let account = this;
    let password = hash.sha256(candidatePassword);
    let isMatch = password === account.password;

    if (isMatch) {
        cb(null, isMatch);
    } else {
        cb('error', isMatch);
    }
};

module.exports = mongo.model('userSchema', userSchema);