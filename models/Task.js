const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending" },
  progress: { type: Number, default: 0 }, // Percentage
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
