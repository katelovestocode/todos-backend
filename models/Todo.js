const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    text: {
      type: String,
      require: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;
