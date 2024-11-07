// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Route for registering a new user
router.post('/register', UserController.registerUser);

// Route for logging in
router.post('/login', UserController.loginUser);

// Route for fetching user details
router.get('/:id', UserController.getUser);

module.exports = router;
