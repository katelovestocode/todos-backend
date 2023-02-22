const Todo = require("../../models/Todo");

const addTodo = async (req, res, next) => {
  try {
    const newTodo = await Todo.create({ ...req.body });

    res.status(201).json({
      status: "success",
      code: 201,
      result: newTodo,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addTodo;
