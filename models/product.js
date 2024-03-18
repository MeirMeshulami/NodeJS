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

// Product has many ProductImages
Product.hasMany(ProductImages, { foreignKey: 'productId' });


Product.hasMany(ProductCategories, { foreignKey: 'productId' });

// // Product belongs to many Category through ProductCategories
// Product.belongsToMany(Category, { through: 'ProductCategories' });

module.exports = Product;
