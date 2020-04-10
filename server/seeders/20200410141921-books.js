'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let seedData = [];

    for (let i = 0; i < 100; i++) {
      const book = {
        isbn: faker.finance.iban(),
        name: faker.commerce.productName(),
        author: faker.name.findName(),
        price: faker.commerce.price(),
        genre: faker.random.word(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      seedData.push(book);
    }
    return queryInterface.bulkInsert('books', seedData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('books', null, {});
  }
};
