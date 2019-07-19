const models = require("./models");

const { todos } = models;

module.exports.createTodo = async function(todo) {
  return await todos.create(todo);
};

module.exports.getAllTodos = async function() {
  return await todos.findAll();
};

module.exports.getTodoById = async function(todo_id) {
  return await todos.findOne({
    where: {
      todo_id,
    },
  });
};

module.exports.deleteTodoById = async function(todo_id) {
  return await todos.destroy({
    where: {
      todo_id,
    },
  });
};

module.exports.updateTodo = async function(todo) {
  const foundTodo = await this.getTodoById(todo.todo_id);
  foundTodo.text = todo.text;
  foundTodo.title = todo.title;
  return await foundTodo.save();
};
