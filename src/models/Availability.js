const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Availability = sequelize.define('Availability', {
  availabilityid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  
  tableName: 'availability', // Nombre exacto de la tabla en la base de datos
  timestamps: false, // Deshabilitar timestamps si no se usan
});


module.exports = Availability;