const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');



const Company = sequelize.define('company',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    companyName:{
        type:DataTypes.STRING,
        allowNull:false
    }
    
})

module.exports = 
    Company
