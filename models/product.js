const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/database');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.TEXT
  },
  category: {
    type: DataTypes.INTEGER
  }
}, {
  // Other model options go here
});

module.exports = Product;