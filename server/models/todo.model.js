class Todo {
  constructor({ id, title, description, dueDate, done = false }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.done = done;
  }
}

module.exports = Todo;