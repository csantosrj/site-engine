const Todo = require("../models/todo.model");

let todos = [];
let nextId = 1;

function getAll() {
  return todos;
}

function create({ title, description, dueDate }) {
  const todo = new Todo({
    id: nextId++,
    title,
    description,
    dueDate,
    done: false
  });

  todos.push(todo);
  return todo;
}

function complete(id) {
  const todo = todos.find(t => t.id === Number(id));
  if (todo) {
    todo.done = true;
  }
}

function remove(id) {
  todos = todos.filter(t => t.id !== Number(id));
}

module.exports = {
  getAll,
  create,
  complete,
  remove
};