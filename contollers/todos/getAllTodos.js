const Todo = require("../../models/Todo");

const getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();

    res.json({
      status: "success",
      code: 200,
      data: todos,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllTodos;
