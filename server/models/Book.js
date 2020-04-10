const Sequelize = require('sequelize');
const db = require('../config/database');

const Book = db.define('book', {
    isbn: {
        type: Sequelize.STRING
    },

    name: {
        type: Sequelize.STRING
    },

    author: {
        type: Sequelize.STRING
    },

    price: {
        type: Sequelize.FLOAT
    },

    genre: {
        type: Sequelize.STRING
    }
});

module.exports = Book;