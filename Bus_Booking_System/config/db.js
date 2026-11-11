const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'Laxmanaliasbunny*525',
    database: 'bus_booking_system'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        connection.end();
        return;
    }
    console.log("Connected successfully");
})

module.exports = connection;