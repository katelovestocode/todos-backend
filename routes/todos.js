const express = require("express");
const router = express.Router();

const { controllerTodos } = require("../contollers");

// =====================  GET ALL TODOS =====================
router.get("/", controllerTodos.getAllTodos);

// =====================  CREATE NEW TODO =====================
router.post("/new", controllerTodos.addTodo);

// =====================  DELETE CONTACT BY ID ==================
router.delete("/:contactId", controllerTodos.deleteTodo);

// =====================  UPDATE COMPLETE BY ID ==================
router.put("/:contactId/complete", controllerTodos.toggleComplete);

module.exports = router;
