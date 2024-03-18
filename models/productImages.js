const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const ProductImages = sequelize.define('ProductImages', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  url: {
    type: DataTypes.STRING
  },
  productId: {
    type: DataTypes.INTEGER
  }
}, {
  
});


module.exports = ProductImages;
