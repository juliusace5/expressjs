const Post = require('../models/Post');
const User = require('../models/User');

// Get all posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: {
                model: User,
                attributes: ['id', 'name', 'avatar'],
            },
        });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving posts', error });
    }
};

// Create a new post
exports.createPost = async (req, res) => {
    try {
        const { content, userId } = req.body;
        const post = await Post.create({ content, userId });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
    }
};

// Get a single post
exports.getPost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, {
            include: {
                model: User,
                attributes: ['id', 'name', 'avatar'],
            },
        });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving post', error });
    }
};

// Update a post
exports.updatePost = async (req, res) => {
    try {
        const { content } = req.body;
        const post = await Post.findByPk(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.content = content;
        await post.save();
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error });
    }
};

// Delete a post
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        await post.destroy();
        res.json({ message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error });
    }
};
