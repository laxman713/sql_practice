const Students = require("../models/students");
const db = require("../utils/db-connections");

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


const getStudents = (req,res)=>{
    const getQuery = `select * from students`;
    db.execute(getQuery,(err,result)=>{
        if(err){
           console.log(err.message);
        res.status(500).send(err);
        db.end();
        return; 
        }
        console.log("values retrieved");
        res.status(201).json(result);
    })
}

const getStudentsByID = (req,res)=>{
    const {id} = req.params;
    const getQueryByID = `select * from students where id = ?`;
    db.execute(getQueryByID,[id],(err,result)=>{
        if(err){
           console.log(err.message);
        res.status(500).send(err);
        db.end();
        return; 
        }
        console.log("values retrieved");
        res.status(201).json(result);
    })
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