// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/db'); // Database connection
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // For parsing JSON requests

// Import routes
const postController = require('./controllers/postController');
const userRoutes = require('./Routes/userRoutes'); // Adjust path as needed

// Post routes
app.get('/posts', postController.getPosts);
app.post('/posts', postController.createPost);
app.get('/posts/:id', postController.getPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

// User routes (prefix all with `/users`)
app.use('/users', userRoutes);

// Sync database and start server
sequelize.sync().then(() => {
    console.log('Database connected and synchronized');
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}).catch(err => console.error('Error syncing database:', err));
