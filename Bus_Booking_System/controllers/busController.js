const db = require("../config/db");


const busEntry = (req,res)=>{

    const {busNumber,totalSeats,availableSeats} = req.body;

    
    const busInsert = `insert into bus(busNumber,totalSeats,availableSeats) values (?,?,?);`;

    db.execute(busInsert,[busNumber,totalSeats,availableSeats],(err)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log("Values inserted into table");
        res.status(200).send(`${busNumber},${totalSeats} and ${availableSeats} are inserted`)
    })
}


const retrievBusEntries = (req,res)=>{
    const {seats}  = req.params;
    const retrieveQuery = `select * from bus where availableSeats>?`;
    db.execute(retrieveQuery,[seats],(err,result)=>{
        if(err){
            res.status(404).send(err.message);
            db.end();
            return;
        }
        console.log("Values retrieved");
        res.status(201).json(result);
    })
}

module.exports = {
    busEntry,
    retrievBusEntries
}