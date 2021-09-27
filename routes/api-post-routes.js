const express = require('express');
const router = express.Router();
const { getPost, deletePost, editPost, getPosts, addPost } = require('../controllers/api-post-controller');


//Get all Posts
router.get('/api/posts', getPosts);
//Add New Post
router.post('/api/post', addPost);
//Get Post by ID
router.get('/api/post/:id', getPost);
//Delete Post by ID
router.delete('api/post/:id', deletePost);
//Update Post by ID
router.put('/api/edit/:id', editPost);

module.exports = router;