const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AvailabilityInterval = sequelize.define('AvailabilityInterval', {
  availabilityintervalid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  starttime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  endtime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  isactive:{
    type: DataTypes.BOOLEAN,
    defaultValue:true
  }
}, {
  
  tableName: 'availability_interval', // Nombre exacto de la tabla en la base de datos
  timestamps: false, // Deshabilitar timestamps si no se usan
});


module.exports = AvailabilityInterval;