var db = require('../models');

exports.getPosts = function(req, res){
    db.Post.find()
    .then(function(posts){
        res.json(posts);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createPost = function(req, res){
    db.Post.create(req.body)
    .then(function(newPost){
        res.status(201).json(newPost);
    }).catch(function(err){
        res.send(err);
    });
}

exports.getPost = function(req, res){
    db.Post.findById(req.params.postId)
    .then(function(foundPost){
        res.json(foundPost)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updatePost = function(req, res){
    db.Post.findOneAndUpdate({_id: req.params.postId}, req.body, {new: true})
    .then(function(post){
        res.json(post)    
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.deletePost = function(req, res){
    db.Post.deleteOne({_id: req.params.postId})
    .then(function(){
        res.json({message: "Reqested item has been deleted."})
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports;