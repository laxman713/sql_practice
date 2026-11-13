const {Users,Booking,Buses} = require("./createTables");

//one to many

Users.hasMany(Booking);
Booking.belongsTo(Users);

Buses.hasMany(Booking);
Booking.belongsTo(Buses)

module.exports = {
    Users,
    Booking,
    Buses
}