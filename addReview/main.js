const express  = require('express');
const app = express();
const sequelize = require('./config/database');





sequelize.sync().then(()=>{
   app.listen(3000,()=>{      
    console.log("Server is running on localhost:3000");
});
})
  .catch((err)=>{
    console.log(err);
  })

