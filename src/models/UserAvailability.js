const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserAvailability = sequelize.define('UserAvailability', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  availabilityid: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Availability', // Nombre del modelo en singular tal como está definido en Sequelize
      key: 'availabilityid',
    },
    allowNull: false,
  },
  intervalid: {
    type: DataTypes.INTEGER,
    references: {
      model: 'AvailabilityInterval', // Nombre del modelo en singular tal como está definido en Sequelize
      key: 'availabilityintervalid',
    },
    allowNull: false,
  },
  userid: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User', // Nombre del modelo en singular tal como está definido en Sequelize
      key: 'userid',
    },
    allowNull: false,
  },
}, {
  
  tableName: 'user_availability', // Nombre exacto de la tabla en la base de datos
  timestamps: false, // Deshabilitar timestamps si no se usan
});


module.exports = UserAvailability;