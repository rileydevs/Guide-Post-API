var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://rileydev:J24S17gr99!#@ds137687.mlab.com:37687/guide-post-api', 
    {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports.Post = require("./post");

//mongodb://jriley:Express!1@ds221416.mlab.com:21416/express_api