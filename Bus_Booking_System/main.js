//main.js


const express = require('express');
const app = express();
const connection = require("./config/db");
const tables = require("./database/createTables");
const userRouter = require("./routes/userRoutes");
const busRouter = require("./routes/busRoutes");

app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Bus booking System api is running")
});

app.use('/BBS',userRouter);
app.use('/BBS',busRouter);


connection.sync()
  .then(()=>{
  app.listen(3000,()=>{
    console.log("server is running on localhost:3000");
})
  })
  .catch((err)=>{
    console.log(err);
  })

