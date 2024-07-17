const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres.txqrimmvuyjsslyaetqi', 'Tutorias96rest', {
  host: 'aws-0-us-west-1.pooler.supabase.com',
  port: 6543,
  dialect: 'postgres',
  logging: false, // Puedes habilitar o deshabilitar el registro de SQL según tu preferencia
});

module.exports = sequelize;