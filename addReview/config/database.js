const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('addReview','root','Laxmanaliasbunny*525',{
    host:'localhost',
    dialect: 'mysql'
});



(async ()=>{try{
    await sequelize.authenticate();
    console.log("Connection establised")

}catch(err){
    console.log(err);
}})();


module.exports = sequelize;