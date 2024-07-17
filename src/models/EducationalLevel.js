const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EducationalLevel = sequelize.define('EducationalLevel', {
  levelid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  levelname: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  leveldescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  
  tableName: 'educational_levels', // Nombre exacto de la tabla en la base de datos
  timestamps: false, // Deshabilitar timestamps si no se usan
});


module.exports = EducationalLevel;