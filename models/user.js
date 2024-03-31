const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  email:{
    type:DataTypes.STRING
  },
  password:{
    type:DataTypes.STRING
  },
  token:{
    type:DataTypes.STRING
  }
}, {
  tableName: 'User'
});

module.exports = User;
