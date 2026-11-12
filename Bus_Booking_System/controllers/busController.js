const db = require("../config/db");
const { Buses } = require("../database/createTables");
const {Op} = require('sequelize');

const busEntry = async (req,res)=>{

try{
    const {busNumber,totalSeats,availableSeats} = req.body;
    const addEntry = await Buses.create({
        busNumber : busNumber,
        totalSeats : totalSeats,
        availableSeats : availableSeats
    })
 res.status(201).send(`new Bus added with number ${busNumber}`);

}catch(err){
    console.log(err.message);
 res.status(500).send("Unable to make an entry");
}
}



  const retrievBusEntries = async (req,res)=>{
   try{
    const {seats}  = req.params;
    const retrieveBus =await Buses.findAll({
        where:{
            availableSeats:{
             [Op.gt] : Number(seats)
            }
        }
    });
       console.log("Requested seats:", seats);
        console.log("Retrieved buses:", retrieveBus);
    if(retrieveBus.length===0){
       
       return  res.status(404).send("Bus not found");
    }
     res.status(201).json(retrieveBus);
   }catch(err){
    console.log(err);
            res.status(500).send(err);

   }
}


module.exports = {
    busEntry,
    retrievBusEntries
}