const db = require("../utils/db-connections");

const addEntries = (req,res)=>{
const {email,name,age} = req.body;
const insertQuery = `INSERT INTO STUDENTS(email,name,age) values (?,?,?) `
db.execute(insertQuery,[email,name,age],(err)=>{
    if(err){
        console.log(err.message);
        res.status(500).send(err);
 db.end();
 return;
}
console.log("Values has been inserted");
res.status(200).send(`student with name ${name} successfully added`);
})

}

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




const updateEntry = (req,res)=>{
    const {id} = req.params;
    const {name,age} = req.body;
    const updateQury=`update students set name = ?, age = ? where id=?`;
    db.execute(updateQury,[name,age,id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;

        }
        if(result.affectedRows == 0){
            res.status(404).send("Student not found");
            return;
        }
        res.status(200).send("user has been updated");
    })
}

const deleteEntry = (req,res)=>{
    const {id} = req.params;
    const deleteQuery = `delete from students where id = ?`;
    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(404).send(err.message);
        }
        if(result.affectedRows == 0){
            res.status(404).send("Student not found");
         return;
        }
        res.status(200).send(`user with id ${id} is deleted `);

    })
}

module.exports = {
    addEntries,
    getStudents,
    getStudentsByID,
    updateEntry,
    deleteEntry
}