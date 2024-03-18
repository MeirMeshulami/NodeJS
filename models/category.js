const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const Product=require('../models/product');

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'Category'
});

// Category.belongsToMany(Product, { through: 'ProductCategories', foreignKey: 'categoryId'  });
module.exports = Category;
