'use strict';

const sequelize = require('../utils/database');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Session', {
      sid: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      expires:{
        type:Sequelize.DATE
      },
      data:{
        type:Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Session');
  }
};