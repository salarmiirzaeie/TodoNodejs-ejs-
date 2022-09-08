const fs = require("fs");
const path = require("path");
const rooDir=require('../utils/path')
const filePath=path.join(rooDir,'data','todo.json')
class Todo {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }
  save(callback) {
    fs.readFile(filePath, (err, filecontent) => {
      const todos = JSON.parse(filecontent);
      todos.push(this);
      fs.writeFile(filePath, JSON.stringify(todos), (err) => {
        if (!err) callback(err);
      });
    });
  }
  
}
module.exports=Todo