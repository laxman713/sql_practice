const connection = require("../config/db");


const createUserTable = `
create table if not exists users(
id int auto_increment primary key,
name varchar(200),
email varchar(200)
)`;

connection.execute(createUserTable,(err)=>{
    if(err){
        console.log(err.message);
        connection.end();
        return;
    }
    console.log(" user table created successfully")
});


const createBusesTable = `
create table if not exists bus(
id int auto_increment primary key,
busNumber int,
totalSeats int,
availableSeats int
)`;

connection.execute(createBusesTable,(err)=>{
    if(err){
        console.log(err.message);
        connection.end();
        return;
    }
    console.log("bus table created successfully")
});

const createBookingsTable = `
create table if not exists booking(
id int auto_increment primary key,
seatNumber int
)`;

connection.execute(createBookingsTable,(err)=>{
    if(err){
        console.log(err.message);
        connection.end();
        return;
    }
    console.log("Booking table created successfully")
});

const createPaymentsTable = `
create table if not exists payments(
id int auto_increment primary key,
amountPaid int,
paymentStatus varchar(200)
)`;

connection.execute(createPaymentsTable,(err)=>{
    if(err){
        console.log(err.message);
        connection.end();
        return;
    }
    console.log("Payment table created successfully")
});

module.exports = {
    createUserTable,
    createBookingsTable,
    createBusesTable,
    createPaymentsTable
}