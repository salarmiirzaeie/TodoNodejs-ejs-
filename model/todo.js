const {DataTypes}=require('sequelize')
const sequelize=require('../utils/database')
const Todo=sequelize.define("Todo",{
    //?Model attributes
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false

    },
    text:{
        type:DataTypes.STRING,
        allowNull:false

    },
    completed:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,

    }



})
module.exports=Todo;