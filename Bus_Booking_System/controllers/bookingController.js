const { Users, Booking, Buses } = require("../database/createTables");

const bookingEntry =async (req,res)=>{
try{
 const {userId,busId,seatNumber} = req.body;
const user = await Users.findByPk(userId);
if(!user){
    return res.status(404).send("user not found");
}
const bus = await Buses.findByPk(busId);
if(!bus){
        return res.status(404).send("bus not found");

}
const booking = await Booking.create({
    userId:userId,
    busId:busId,
    seatNumber:seatNumber
})

 res.status(201).json({
    message: "Booking created successfully",
    booking
});
}catch(err){
return res.status(500).json({
            message: "Something went wrong",
            error: err.message
        });
}}

const getUserBookings = async (req,res)=>{
try{
    const {userId} = req.params;
    const user = await Users.findByPk(userId);
    if(!user){
        return res.status(404).send("User not found");
    }
    const booking = await Booking.findAll({
        where:{
            userId:userId
        },
        include:[Users]
    })

     return res.status(200).json({
    message: "User bookings fetched successfully",
    bookings: booking
});

}catch(err){
  res.status(500).json({err:err.message});
}
}






module.exports = {
    bookingEntry,
    getUserBookings
}