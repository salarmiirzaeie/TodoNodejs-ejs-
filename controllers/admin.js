const { where } = require("sequelize");
const Todo = require("../model/todo");

exports.addTodo = (req, res) => {
  if (!req.body.todo) return res.redirect("/");
  Todo.create({ text: req.body.todo })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => console.log(err));
 
};

exports.deleteTodo = (req, res) => {
  Todo.destroy({where:{id:req.params.id}} ).then(()=>{

    res.redirect("/");
  }).catch((err)=>console.log(err))
   
};

exports.completeTodo = (req, res) => {
  Todo.findByPk(req.params.id).then(todo=>{
    todo.completed=true;
    return todo.save();
  }).then(()=>res.redirect("/"))
  .catch(err=>console.log(err))
};
