const express = require('express');
const router = express.Router();
const postController = require('../../controllers/postController');

// Get all posts
router.get('/', postController.getPosts);

// Create a new post
router.post('/', postController.createPost);

// Get a single post by ID
router.get('/:id', postController.getPost);

// Update a post by ID
router.put('/:id', postController.updatePost);

// Delete a post by ID
router.delete('/:id', postController.deletePost);

module.exports = router;
