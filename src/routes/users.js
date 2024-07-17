const express = require('express');
const router = express.Router();
const { User, Credential, UserRole, Role, sequelize,UserEducationalLevel } = require('../models');

// Crear un nuevo usuario con credenciales y roles
router.post('/', async (req, res) => {
  const {
    FirstName,
    LastName,
    IdentificationNumber,
    City,
    Phone,
    Username,
    Email,
    Password,
    IdentificationType,
    Country,
    Region,
    Image,
    student,
    tutor
  } = req.body;
  // Validación de entrada
  if (!Username || !Email || !Password) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }
  
  const t = await sequelize.transaction();
  
  try {
    // Crear el usuario
    const newUser = await User.create({
      firstname:FirstName,
      lastname:LastName,
      identificationnumber:IdentificationNumber,
      city:City,
      phone:Phone,
      identificationtype:IdentificationType,
      country:Country,
      region:Region,
      image:Image,
    }, { transaction: t });
    // Crear las credenciales
    await Credential.create({
      credentialid: newUser.userid,
      userid: newUser.userid,
      emailaddress: Email,
      username: Username,
      password: Password,
    }, { transaction: t });
    
    // Asignar roles si se especifican
    
    if (student) {
      const studentRole = await Role.findOne({ where: { description: 'student' } });
      if (studentRole) {
        await UserRole.create({
          userid: newUser.userid,
          roleid: studentRole.roleid,
        }, { transaction: t });
      }
    }

    if (tutor) {
      const tutorRole = await Role.findOne({ where: { description: 'tutor' } });
      if (tutorRole) {
        await UserRole.create({
          userid: newUser.userid,
          roleid: tutorRole.roleid,
        }, { transaction: t });
      }
    }

    await t.commit();
    res.status(201).json({message:"Usuario Creado"});
  } catch (err) {
    await t.rollback();
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
});

module.exports = router;
