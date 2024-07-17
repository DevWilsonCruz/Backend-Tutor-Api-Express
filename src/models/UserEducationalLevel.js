const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserEducationalLevel = sequelize.define('UserEducationalLevel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  levelid: {
    type: DataTypes.INTEGER,
    references: {
      model: 'LevelEducation', // Nombre del modelo en singular tal como está definido en Sequelize
      key: 'levelid',
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
  
  tableName: 'user_educational_levels', // Nombre exacto de la tabla en la base de datos
  timestamps: false, // Deshabilitar timestamps si no se usan
});


module.exports = UserEducationalLevel;