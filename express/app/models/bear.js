// app/models/users.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://localhost/test');

var BearSchema = new Schema({
    name: String,
    password: String
    // test: String 
});

module.exports = mongoose.model('Bear', BearSchema);