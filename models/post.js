var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    title: String,
    location: String,
    duration: String,
    description: String,
    rating: Number
})

var Post = mongoose.model('Post', postSchema);

module.exports = Post;