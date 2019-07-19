const todoService = require("./services");
module.exports.allTodos = async function(req, res) {
  return res.send(await todoService.getAllTodos());
};

module.exports.oneTodo = async function(req, res) {
  const todoId = req.params.id;
  return res.send(await todoService.getTodoById(todoId));
};

module.exports.postNewTodo = async function(req, res) {
  const text = req.body.text;
  const title = req.body.title;

  const newTodo = { text, title };

  return res.send(await todoService.createTodo(newTodo));
};

module.exports.editTodo = async function(req, res) {
  const todoId = req.params.id;
  const text = req.body.text;
  const title = req.body.title;

  const newTodo = { text, title, todo_id: todoId };

  return res.send(await todoService.updateTodo(newTodo));
};

module.exports.removeTodo = async function(req, res) {
  const todoId = req.params.id;
  await todoService.deleteTodoById(todoId);
  return res.send(`Todo of id ${todoId} deleted successfully`);
};
