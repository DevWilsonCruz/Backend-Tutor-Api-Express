// routes/auth.js
const express = require('express');
const router = express.Router();
const { Credential, User ,sequelize,UserRole,Role,UserEducationalLevel,UserSubjects} = require('../models');
const bcrypt = require('bcrypt');
const {Op} =require("sequelize");

router.post('/', async (req, res) => {
  const { emailOrUsername, password } = req.body;
  if(!emailOrUsername || !password)return res.status(400).json({ message: 'Los campos no pueden estar vacíos' });
  try {
    // Buscar la credencial por correo electrónico o nombre de usuario
    const credential = await Credential.findOne({
      where: {
        [Op.or]: [
          { emailaddress: emailOrUsername},
          { username: emailOrUsername }
        ]
      }
    });
    if (!credential) {
      return res.status(400).json({ message: 'Usuario O Correo No encontrado' });
    }

    // Verificar la contraseña
    // const validPassword = await bcrypt.compare(password, credential.dataValues.password);
    const validPassword = await password === credential.dataValues.password;
    if (!validPassword) {
      return res.status(400).json({ message: 'Credenciales no válidas' });
    }
    const userRole = await UserRole.findOne({where:{userid :credential.dataValues.userid}})
    const role = await Role.findOne({where:{roleid :userRole.dataValues.roleid}})
    const userEducationLevel = await UserEducationalLevel.findOne({where:{userid:credential.dataValues.userid}})
    const userSubjects = await UserSubjects.findOne({where:{userid:credential.dataValues.userid}})
    const profileComplete = userEducationLevel && userSubjects ? true:false
    
    res.status(200).json({
      message: 'Autenticación exitosa',
      userid:credential.dataValues.userid,
      role:role.dataValues.description,
      auth:true,
      profileComplete:profileComplete
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
