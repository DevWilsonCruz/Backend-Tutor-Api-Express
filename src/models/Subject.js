const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subjects = sequelize.define('Subjects', {
  subjectid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  subjectname: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  subjectdescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  
  tableName: 'subjects', // Nombre exacto de la tabla en la base de datos
  timestamps: false, // Deshabilitar timestamps si no se usan
});


module.exports = Subjects;