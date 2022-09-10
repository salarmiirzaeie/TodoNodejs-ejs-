const {Sequelize}=require('sequelize')
const sequelize=new Sequelize("todo_db","root","Salar9757110041",{
    dialect:'mysql',
    host:'localhost'
})
module.exports=sequelize;