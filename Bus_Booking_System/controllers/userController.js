const db = require("../config/db");
const { Users } = require("../database/createTables");


const addEntry =async (req,res)=>{

try{
    const {name,email} = req.body;
    const userEntry =await Users.create({
          name : name,
          email : email
    })
    res.status(201).send(`new user added with name ${name}`)

}catch(err){
    console.log(err);
res.status(500).send("unable to make an entry");
}
}

const retrievEntry = async (req,res)=>{
    try{
        const rertriveUsers =await Users.findAll();
        res.status(201).json(rertriveUsers);
    }catch(err){
       res.status(500).send("Cant get users");
    }
}


module.exports = {
    addEntry,
    retrievEntry
}