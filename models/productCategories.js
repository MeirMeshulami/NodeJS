const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const Category = require('../models/category');

const ProductCategories = sequelize.define('ProductCategories', {
  productId: {
    type: DataTypes.INTEGER,
  },
  categoryId: {
    type: DataTypes.INTEGER 
}
}, {
  tableName: 'ProductCategories',
  indexes: [
    {
      unique: true,
      fields: ['productId', 'categoryId'] 
    }
  ]
});

ProductCategories.belongsTo(Category ,{ foreignKey: 'id' });

module.exports = ProductCategories;
