const db = require("../config/db");


const addEntry = (req,res)=>{
    const {name,email} = req.body;
  const insertQuery = `
  insert into users(name,email) values (?,?)`;


db.execute(insertQuery,[name,email],(err)=>{
    if(err){
        console.log(err.message);
        res.status(500).send(err);
        db.end();
        return;
    }
    console.log(`name and email has been inserted`);
    res.status(200).send(`${name} and ${email} are inserted`)
})
}

const retrievEntry = (req,res)=>{
    const retrieveQuery = `select * from users`;
    db.execute(retrieveQuery,(err,result)=>{
        if(err){
            res.status(500).send("User not found");
            db.end();
            return;
        }
        console.log("users has been retrieved");
        res.status(200).json(result);
    })
}


module.exports = {
    addEntry,
    retrievEntry
}