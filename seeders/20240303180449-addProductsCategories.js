'use strict';
const productCategories = require('../data/productCategories.json');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    const createdAt = new Date();
    const updatedAt = new Date();
    await queryInterface.bulkInsert('ProductCategories', productCategories.map(p => ({createdAt, updatedAt ,...p})), {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('ProductCategories', null, {});
  }
};
