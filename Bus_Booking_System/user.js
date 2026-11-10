const express = require('express');
const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : "Laxmanaliasbunny*525",
     database: 'bus_booking_system'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("My sql connected");
    const createTable = ` CREATE TABLE USERS(
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255),
     email VARCHAR(255)
    )
    `;
    connection.execute(createTable,(err)=>{
        if(err){
            console.log(err);
          return;
        }
        console.log("Users table is created");
        connection.end();
    })
})

app.listen(2000,(err)=>{
    console.log("Server is running on localhost:2000");
})