const todoService = require("../services/todo.service");

function list(req, res) {
  const todos = todoService.getAll();
  res.render("pages/todo-list", { todos });
}

function create(req, res) {
  const { title, description, dueDate } = req.body;
  todoService.create({ title, description, dueDate });
  res.redirect("/");
}

function complete(req, res) {
  const { id } = req.params;
  todoService.complete(id);
  res.redirect("/");
}

function remove(req, res) {
  const { id } = req.params;
  todoService.remove(id);
  res.redirect("/");
}

module.exports = {
  list,
  create,
  complete,
  remove
};