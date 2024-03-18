'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductCategories', {
      productId: {
        type: Sequelize.INTEGER,
      },
      categoryId: {
        type: Sequelize.STRING
      }
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductCategories');
  }
};