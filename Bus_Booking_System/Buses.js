const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Laxmanaliasbunny*525",
    database: 'bus_booking_system'
});

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("sql connected");

    const createTable = `create table buses(
    id int auto_increment primary key,
    busNumber int,
    totalSeats int,
    availableSeats int
    )`

    connection.execute(createTable,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("table created");
    })
})