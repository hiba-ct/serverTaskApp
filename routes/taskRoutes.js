const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// Define your routes
router.post("/", async (req, res) => {
  // Logic for creating a task
});

router.get("/", async (req, res) => {
  // Logic for fetching tasks
});

router.put("/:id", async (req, res) => {
  // Logic for updating a task
});

router.delete("/:id", async (req, res) => {
  // Logic for deleting a task
});

module.exports = router; 
