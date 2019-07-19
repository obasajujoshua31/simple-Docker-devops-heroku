const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router
  .route("/")
  .get(controller.allTodos)
  .post(controller.postNewTodo);

router
  .route("/:id")
  .get(controller.oneTodo)
  .put(controller.editTodo)
  .delete(controller.removeTodo);

module.exports = router;
