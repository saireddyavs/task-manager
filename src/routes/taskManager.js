const taskManagerRoutes = require("express").Router();
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const {
  getTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
} = require("../controller/taskManager");
const { createTaskValidation } = require("../validator/taskManager");

taskManagerRoutes.use(bodyParser.json());
taskManagerRoutes.use(bodyParser.urlencoded({ extended: false }));

taskManagerRoutes.get("/", getTasks);

taskManagerRoutes.post("/", createTaskValidation, createTask);

taskManagerRoutes.get("/:taskID", getTask);

taskManagerRoutes.put("/:taskID", updateTask);

taskManagerRoutes.delete("/:taskID", deleteTask);

module.exports = taskManagerRoutes;
