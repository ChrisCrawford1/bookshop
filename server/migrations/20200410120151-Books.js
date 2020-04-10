'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('books', {
      id: {  
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
       },

      isbn: {
        type: Sequelize.DataTypes.STRING
      },

      name: {
        type: Sequelize.DataTypes.STRING
      },

      author: {
        type: Sequelize.DataTypes.STRING
      },

      price: {
        type: Sequelize.DataTypes.FLOAT
      },

      genre: {
        type: Sequelize.DataTypes.STRING
      },

      createdAt: {
        type: Sequelize.DataTypes.DATE
      },
 
      updatedAt: {
       type: Sequelize.DataTypes.DATE
     }
    });

  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('books');
  }
};
