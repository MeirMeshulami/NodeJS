'use strict';
const productImages = require('../data/productImages.json');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    const data = [];
    const createdAt = new Date();
    const updatedAt = new Date();
    for(const image of productImages){
          const {productId, images} = image;
          for(const url of images){
            data.push({productId, url, createdAt, updatedAt});
          }
    }
    await queryInterface.bulkInsert('productimages', data, {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
