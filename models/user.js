const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// models/user.js
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true }
});
userSchema.plugin(passportLocalMongoose); // default uses 'username'

module.exports = mongoose.model('User', userSchema);
