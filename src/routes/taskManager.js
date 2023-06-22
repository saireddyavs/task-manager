const taskManagerRoutes = require("express").Router();
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");

taskManagerRoutes.use(bodyParser.json());
taskManagerRoutes.use(bodyParser.urlencoded({ extended: false }));

var idCounter = 1;

const tasks = [
  { title: "Title-1", description: "description-1", isComplete: false, id: 1 },
];

taskManagerRoutes.get("/", (req, res) => {
  res.status(200);
  res.send(tasks);
});

taskManagerRoutes.post(
  "/",
  [
    check("title", "Title should be string").isString(),
    check("description", "Description should be string").isString(),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.json(errors);
      res.status(400);
      console.log(errors);
      return;
    }

    tasks.push({ ...req.body, id: idCounter });
    idCounter += 1;
    res.status(200);
    res.send(tasks);
  }
);

taskManagerRoutes.get("/:taskID", (req, res) => {
  const task = tasks.find((t) => t.id == req.params.taskID);
  res.status(200);
  res.send(task);
});

taskManagerRoutes.put("/:taskID", (req, res) => {
  const taskIndex = tasks.findIndex((t) => t.id == req.params.taskID);
  tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
  res.status(200);
  res.send(tasks);
});

module.exports = taskManagerRoutes;
