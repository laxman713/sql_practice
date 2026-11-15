const express  = require('express');
const app = express();
const sequelize = require('./config/database');
require("./createTables/companytable");
require("./createTables/reviewTable");
require("./createTables/association");
const companyRouter = require("./routes/companyRoute");
const reviewRouter = require("./routes/reviewRoute");
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/companies',companyRouter);
app.use('/reviews',reviewRouter);

sequelize.sync().then(()=>{
   app.listen(3000,()=>{      
    console.log("Server is running on localhost:3000");
});
})
  .catch((err)=>{
    console.log(err);
  })

