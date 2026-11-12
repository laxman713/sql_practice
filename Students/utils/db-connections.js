const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('student_db','root','Laxmanaliasbunny*525',{
    host : 'localhost',
    dialect : 'mysql'
});
(async ()=>{try{
  await sequelize.authenticate();
  console.log("connetion is established")
}catch(err){
 console.log(err);
}})();



module.exports = sequelize;


// const mysql = require('mysql2');
// cons

//  const connection =   mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Laxmanaliasbunny*525',
//     database: 'student_db'
// })

// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("connection created");
//     const createQuery = `create table if not exists Students(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(20),
//     email VARCHAR(20) unique,
//     age int
//     )`
//     connection.execute(createQuery,(err)=>{
//         if(err){
//             console.log(err);
//             connection.end();
//             return;
//         }
//         console.log("table is created");
//     })
// })
// module.exports = connection;