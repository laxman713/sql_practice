const express = require('express');
const app = express();
const db = require('../Students/utils/db-connections')
const studentRoutes = require("../Students/routes/studentRoutes")

const studentModel = require("./models/students")
app.use(express.json());
app.get('/',(req,res,next)=>{
    res.send("Hello");
})
app.use('/students',studentRoutes);


db.sync().then(()=>{
app.listen(3000,(err)=>{
  console.log("Server is runnign on localhost:3000");
})
})
 .catch((err)=>{
  console.log(err);
 })
