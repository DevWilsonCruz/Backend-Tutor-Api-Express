const express = require('express');
const router = express.Router();
const { User,sequelize,Role,Subjects,Availability} = require('../../models');
const bcrypt = require('bcrypt');
const {Op} =require("sequelize");

router.post('/', async (req, res) => {
  const {nameOrsubject} = req.body;
  if(!nameOrsubject){
    try{
      const users = await User.findAll({
        attributes: ['firstname', 'lastname', 'city', 'country'],
        include: [
          {
            model: Role,
            through: { attributes: [] },
            attributes:[],
            where: { description: "tutor" }
          },{
            model: Subjects,
            through: { attributes: [] },
            attributes: ["subjectname"],
            required:false
          },

        ]
      });
      res.status(200).json(users)
    }catch(error){
      console.log(error)
      res.status(400).json({message:"No se encontraron tutores"})
    }
  }else{
    try{
      const users = await User.findAll({
        attributes: ['firstname', 'lastname', 'city', 'country'],
        include: [
          {
            model: Role,
            through: { attributes: [] },
            attributes: [],
            where: { description: "tutor" }
          },
          {
            model: Subjects,
            through: { attributes: [] },
            attributes: ["subjectname"],
            required:false
          },
          {
            model: Availability,
            through: { attributes: [] },
            attributes: ["date"],
          }
        ],
        where: {
          [Op.or]: [
            { '$Subjects.subjectname$': { [Op.iLike]: `%${nameOrsubject}%` } },
            { firstname: {[Op.iLike]:`%${nameOrsubject}%`} },
            { lastname: {[Op.iLike]:`%${nameOrsubject}%`} },
          ]
        }
      });
      res.status(200).json(users)
    }catch(error){
      res.status(400).json({message:"No se encontraron tutores"})
    }
  }
});

module.exports = router;