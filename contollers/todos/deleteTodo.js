const Todo = require("../../models/Todo");

const deleteTodo = async (req, res, next) => {
  try {
    const id = req.params.contactId;
    const removeTodo = await Todo.findByIdAndRemove(id);

    if (!removeTodo) {
      throw new createError.NotFound(
        `Contact with this id: ${id} is not found`
      );
    }
    res.json({
      status: "success",
      message: "contact deleted",
      code: 200,
      result: { removeTodo },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteTodo;
