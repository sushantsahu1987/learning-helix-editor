const { hello_controller, bye_controller, list_of_todos_controller } = require("../controller")

const router = (app) => {
  app.get("/hello", hello_controller);
  app.get("/bye", bye_controller);
  app.get("/todos", list_of_todos_controller);
};

module.exports = {
  router
};