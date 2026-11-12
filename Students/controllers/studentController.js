const Students = require("../models/students");
const db = require("../utils/db-connections");
const { Op } = require('sequelize');

const addEntries = async (req,res)=>{
    try{
const {email,name} = req.body;
const student = await Students.create({
    email:email,
    name:name,
});
res.status(201).send(`User with name:${name} is created!`)

    }catch(err){
        res.status(500).send("unable to make an entry");
    }}


const getStudents = async (req,res)=>{
    try{
    const students = await Students.findAll();
    if(students.length===0){
        res.status(404).send("User not found");
    }
    res.status(201).json(students);
}
catch(err){
    console.log(err);
}
}

const getStudentsByID = async (req,res)=>{
    try{ 
const {id} = req.params;
   const students = await Students.findAll({
    where:{
        id:{
            [Op.lt]:10
        }
    }
   })
  
   if(students.length===0){
    res.status(404).send("User not found");
   }
   res.status(200).json(students);

    }catch(err){
    res.status(500).send("Syntax error");
    }
}




const updateEntry = async (req,res)=>{
   

try{
 const {id} = req.params;
    const {name,email} = req.body;
    const student = await Students.findByPk(id);
    if(!student){
        res.status(404).send("user not found");
    }
    student.name = name;
    student.email  = email;
    await student.save();
    res.status(200).send("User has been updated!")

}catch(err){
    console.log(err);
    res.status(500).send("user updated");
}
}  

const deleteEntry = async (req,res)=>{
    try{
        const {id} = req.params;
        const student = await Students.destroy({
            where:{
                id:id
            }
        })
        if(!student){
           return res.status(404).send("user not found");
        }
        res.status(200).send("user is deleteed")
    }catch(e){
     console.log(e);
    }
}


module.exports = {
    addEntries,
    getStudents,
    getStudentsByID,
    updateEntry,
    deleteEntry
}