const { todos } = require("../data/todos")

const health_controller = (req, resp) => {
  resp.send({ message: "ok" });
}

const list_of_todos_controller = (req, resp) => {
  resp.send({ todo: todos });
}

const add_todos_controller = (req, resp) => {
  const body = req.body;
  todos.push(body);
  resp.send(todos)
}

const update_todos_controller = (req, resp) => {
  const id = +req.params.id;
  const body = req.body;
  const index = todos.findIndex(todo => todo.id === id)
  if (index === -1) {
    resp.send({ msg: "todo not found"});
  } else {
    todos[index].status = body.status
    resp.send(todos)
  }
}

const delete_todos_controller = (req, resp) => {
  const id = +req.params.id;
  const index = todos.findIndex(todo => todo.id === id)
  if (index === -1) {
    resp.send({ msg: "todo not found"});
  } else {
    todos.splice(index, 1 );
    resp.send(todos)
   }
}

module.exports = {
  health_controller,
  list_of_todos_controller,
  add_todos_controller,
  update_todos_controller,
  delete_todos_controller
}