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

taskManagerRoutes.use(bodyParser.json());
taskManagerRoutes.use(bodyParser.urlencoded({ extended: false }));

var idCounter = 1;

const tasks = [
  { title: "Title-1", description: "description-1", isComplete: false, id: 1 },
];

taskManagerRoutes.get("/", getTasks);

taskManagerRoutes.post(
  "/",
  [
    check("title", "Title should be string").isString(),
    check("description", "Description should be string").isString(),
  ],
  createTask
);

taskManagerRoutes.get("/:taskID", getTask);

taskManagerRoutes.put("/:taskID", updateTask);

taskManagerRoutes.delete("/:taskID", deleteTask);

module.exports = taskManagerRoutes;
