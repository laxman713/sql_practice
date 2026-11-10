const express = require('express');
const app = express();
const mysql = require('mysql2');

 const connection =   mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Laxmanaliasbunny*525',
    database: 'student_db'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connection created");
    const createQuery = `create table Students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(20)
    )`
    connection.execute(createQuery,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("table is created");
    })
})


app.use('/',(req,res,next)=>{
    res.send("Hello");
})


app.listen(3000,(err)=>{
  console.log("Server is runnign on localhost:3000");
})