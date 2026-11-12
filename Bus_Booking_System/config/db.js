const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('bus_booking_system','root','Laxmanaliasbunny*525',{
    host: 'localhost',
    dialect: 'mysql'
});

(async ()=>{try{
    await sequelize.authenticate();
    console.log("Connection Established");

}catch(err){
    console.log(err);
}})();

module.exports = sequelize;








// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user:'root',
//     password: 'Laxmanaliasbunny*525',
//     database: 'bus_booking_system'
// })

// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//         connection.end();
//         return;
//     }
//     console.log("Connected successfully");
// })

// module.exports = connection;