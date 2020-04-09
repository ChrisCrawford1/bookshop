const Sequelize = require('sequelize');

module.exports = new Sequelize('bookshop', 'postgres', 'tk0375', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
});