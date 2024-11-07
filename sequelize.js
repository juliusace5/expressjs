const { Sequelize } = require('sequelize');
require('dotenv').config();  // This line loads the .env file

// Create a Sequelize instance with the configuration from the .env file
const sequelize = new Sequelize(
    process.env.DB_DATABASE,  // Database name (from .env)
    process.env.DB_USERNAME,  // Database username (from .env)
    process.env.DB_PASSWORD,  // Database password (from .env)
    {
        host: process.env.DB_HOST,   // Database host (from .env)
        dialect: 'mysql',            // MySQL dialect
        port: process.env.DB_PORT,   // Database port (from .env)
    }
);

module.exports = sequelize;  // Export the sequelize instance for use in other files
