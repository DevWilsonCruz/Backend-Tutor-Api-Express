// models/index.js
const sequelize = require('../config/database');
const User = require('./User');
const Credential = require('./Credential');
const Role = require('./Role');
const UserRole = require('./UserRole');
const EducationalLevel = require('./EducationalLevel');
const UserEducationalLevel = require('./UserEducationalLevel');
const Subjects = require('./Subject')
const UserSubjects = require('./UserSubject')
const Availability = require('./Availability')
const AvailabilityInterval = require('./AvailabilityInterval')
const UserAvailability = require('./UserAvailability')

// Definir asociaciones
User.hasMany(Credential, { foreignKey: 'userid' });
Credential.belongsTo(User, { foreignKey: 'userid' });

User.belongsToMany(Role, { through: UserRole, foreignKey: 'userid' });
Role.belongsToMany(User, { through: UserRole, foreignKey: 'roleid' });

User.belongsToMany(EducationalLevel, { through: UserEducationalLevel, foreignKey: 'userid' });
EducationalLevel.belongsToMany(User, { through: UserEducationalLevel, foreignKey: 'levelid' });

User.belongsToMany(Subjects, { through: UserSubjects, foreignKey: 'userid' });
Subjects.belongsToMany(User, { through: UserSubjects, foreignKey: 'subjectid' });

User.belongsToMany(Availability, { through: UserAvailability, foreignKey: 'userid' });
User.belongsToMany(AvailabilityInterval, { through: UserAvailability, foreignKey: 'userid' });
Availability.belongsToMany(User, { through: UserAvailability, foreignKey: 'availabilityid' });
AvailabilityInterval.belongsToMany(User, { through: UserAvailability, foreignKey: 'intervalid' });

module.exports = {
  sequelize,
  User,
  Credential,
  Role,
  UserRole,
  EducationalLevel,
  UserEducationalLevel,
  Subjects,
  UserSubjects,
  Availability,
  AvailabilityInterval,
  UserAvailability,
};
