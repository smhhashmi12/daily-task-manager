const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  priority: {
    type: String,
    enum: ["High", "Medium", "Low"],
    default: "Low",
  },
  progress: { type: Number, min: 0, max: 100, default: 0 },
});

module.exports = mongoose.model("Task", TaskSchema);