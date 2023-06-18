const { todos } = require("../data/todos")

const hello_controller = (req, resp) => {
  resp.send({ message: "hello world" });
}

const bye_controller = (req, resp) => {
  resp.send({ message: "good bye world" });
}

const list_of_todos_controller = (req, resp) => {
  resp.send({todo: todos});
}

module.exports = {
  hello_controller,
  bye_controller,
  list_of_todos_controller
}