const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserSubjects = sequelize.define('UserSubjects', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  subjectid: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Subjects', // Nombre del modelo en singular tal como está definido en Sequelize
      key: 'subjectid',
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
  
  tableName: 'user_subjects', // Nombre exacto de la tabla en la base de datos
  timestamps: false, // Deshabilitar timestamps si no se usan
});


module.exports = UserSubjects;