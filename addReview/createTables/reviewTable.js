const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');



const Review = sequelize.define('review',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    pros:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cons:{
        type:DataTypes.STRING,
        allowNull:false
    }
    
})

module.exports = 
    Company
