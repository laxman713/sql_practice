const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');



const Review = sequelize.define('review',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    pros:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cons:{
        type:DataTypes.STRING,
        allowNull:false
    },
    rating:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
    
},
{
    timestamps:false
})

module.exports = 
    Review
