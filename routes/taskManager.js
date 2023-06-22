const taskManagerRoutes = require("express").Router();
const bodyParser = require("body-parser");

taskManagerRoutes.use(bodyParser.json());
taskManagerRoutes.use(bodyParser.urlencoded({ extended: false }));

const tasks = [
  { title: "Title-1", description: "description-1", isComplete: false, id: 1 },
];

taskManagerRoutes.get("/", (req, res) => {
  res.status(200);
  res.send(tasks);
});

taskManagerRoutes.post("/", (req, res) => {
  tasks.push(req.body);
  res.status(200);
  res.send(tasks);
});

module.exports = taskManagerRoutes;
