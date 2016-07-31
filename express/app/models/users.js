// app/models/users.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connect('mongodb://localhost/test');

var userSchema = new Schema({
    name: String
});

module.exports = mongoose.model('users', userSchema);