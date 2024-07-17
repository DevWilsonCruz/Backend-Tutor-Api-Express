// models/Credential.js
// src/models/Credential.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Credential = sequelize.define('Credential', {
  credentialid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  userid: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User', // Nombre del modelo en singular tal como está definido en Sequelize
      key: 'userid',
    },
    allowNull: false,
  },
  emailaddress: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  
  tableName: 'credentials', // Nombre exacto de la tabla en la base de datos
  timestamps: false, // Deshabilitar timestamps si no se usan
});


module.exports = Credential;