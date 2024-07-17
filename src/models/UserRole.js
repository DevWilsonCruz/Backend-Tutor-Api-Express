// src/models/UserRole.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserRole = sequelize.define('UserRole', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userid: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User', // Nombre del modelo en singular tal como está definido en Sequelize
      key: 'userid',
    },
    allowNull: false,
  },
  roleid: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Role', // Nombre del modelo en singular tal como está definido en Sequelize
      key: 'roleid',
    },
    allowNull: false,
  },
}, {
  tableName: 'user_roles', // Nombre exacto de la tabla en la base de datos
  timestamps: false, // Deshabilitar timestamps si no se usan
});

module.exports = UserRole;