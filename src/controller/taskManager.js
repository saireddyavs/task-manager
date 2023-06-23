const { validationResult } = require("express-validator");

var idCounter = 1;

const tasks = [
  { title: "Title-1", description: "description-1", isComplete: false, id: 1 },
];

const getTasks = (req, res) => {
  res.status(200);
  res.send(tasks);
};

const createTask = (req, res) => {
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
};

const getTask = (req, res) => {
  const task = tasks.find((t) => t.id == req.params.taskID);
  res.status(200);
  res.send(task);
};

const updateTask = (req, res) => {
  const taskIndex = tasks.findIndex((t) => t.id == req.params.taskID);
  tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
  res.status(200);
  res.send(tasks);
};

const deleteTask = (req, res) => {
  const taskIndex = tasks.findIndex((t) => t.id == req.params.taskID);
  tasks.splice(taskIndex, 1);
  res.status(200);
  res.send(tasks);
};

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
