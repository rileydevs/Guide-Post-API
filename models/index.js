var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('', 
    {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports.Post = require("./post");
