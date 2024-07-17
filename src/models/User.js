const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  userid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  identificationnumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  identificationtype: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  region: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'users',
  timestamps: false, 
});

module.exports = User;