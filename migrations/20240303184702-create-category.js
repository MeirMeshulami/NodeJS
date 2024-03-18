'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Category', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true  // unique + index
      },
      name: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Category');
  }
};