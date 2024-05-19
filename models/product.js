const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const ProductImages = require('../models/productimages');
const Category = require('../models/category');
const ProductCategories = require('../models/productCategories');

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
  quantity: {
    type: DataTypes.INTEGER
  }
}, {
});

Product.hasMany(ProductImages, { foreignKey: 'productId' });

Product.belongsToMany(Category, { through: ProductCategories, foreignKey: 'productId' });

module.exports = Product;
