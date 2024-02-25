const { DataTypes} = require('sequelize');
const sequelize = require('../utils/database');

const ProductImages = sequelize.define('ProductImages', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  link: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});

module.exports = ProductImages;