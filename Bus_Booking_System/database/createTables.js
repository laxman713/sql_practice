const sequelize = require("../config/db");
const {DataTypes} = require('sequelize');

const Users = sequelize.define('users',{
    id:{
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true
    },
    name:{
        type : DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type : DataTypes.STRING,
        allowNull : false,
        unique: true
}},
    {
    timestamps: false
}
    
)



const Buses = sequelize.define('buses',{
    id:{
    type: DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
    },
    busNumber:{
        type : DataTypes.STRING,
        allowNull: false
    },
    totalSeats:{
        type:DataTypes.INTEGER,
        allowNull : false
    },
    availableSeats : {
        type: DataTypes.INTEGER,
        allowNull: false
  }},
    {
    timestamps: false
}
    
)
const Booking = sequelize.define('bookings',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    seatNumber:{
        type: DataTypes.INTEGER,
        allowNull: false
  }},
    {
    timestamps: false
}
    
)

const Payments = sequelize.define('payments',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    amountPaid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    paymenStatus:{
        type: DataTypes.STRING,
        allowNull : false
}},
    {
    timestamps: false
}
    
)








module.exports ={
    Users,
    Buses,
    Booking,
    Payments
}


