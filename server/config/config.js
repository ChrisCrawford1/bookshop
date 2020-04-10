/**
 * Tell sequelize where the env is if the 
 * folder structure is different from a 
 * default expressjs setup.
 */
require('dotenv').config({path: '../.env'});


module.exports = {
    "development": {
        "username": process.env.DATABASE_USERNAME,
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.DATABASE_NAME,
        "host": "127.0.0.1",
        "dialect": "postgres"
    }
};