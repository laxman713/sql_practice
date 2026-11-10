const express = require('express');
const app = express();
const db = require('../Students/utils/db-connections')
const studentRoutes = require("../Students/routes/studentRoutes")

app.use(express.json());
app.get('/',(req,res,next)=>{
    res.send("Hello");
})
app.use('/student',studentRoutes);
app.use('/student',studentRoutes);
app.use('/student',studentRoutes);


app.listen(3000,(err)=>{
  console.log("Server is runnign on localhost:3000");
})