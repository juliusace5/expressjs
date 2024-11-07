const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const User = require('./User');  // We will create this model later

const Post = sequelize.define('Post', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt
});

// Associations
Post.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Post, { foreignKey: 'userId' });

module.exports = Post;
