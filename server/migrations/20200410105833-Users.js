'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('users', {
     id: {  
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
     },

     name: {
       type: Sequelize.DataTypes.STRING
     },

     email: {
       type: Sequelize.DataTypes.STRING
     },

     password: {
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
    return queryInterface.dropTable('users');
  }
};
