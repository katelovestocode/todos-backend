const Todo = require("../../models/Todo");

const toggleComplete = async (req, res, next) => {
  try {
    const id = req.params.contactId;

    const todo = await Todo.findById(id);

    todo.complete = !todo.complete;

    await todo.save();

    if (!todo) {
      const error = new Error(`Contact with this id: ${id} is not found`);
      error.status = 404;
      throw error;
    }

    res.status(201).json({
      status: "success",
      code: 201,
      result: todo,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = toggleComplete;
