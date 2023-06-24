const { validationResult } = require("express-validator");
const { handleValidationError, taskNotFound } = require("../errors/apiError");

var idCounter = 1;

const tasks = [
  // { title: "Title-1", description: "description-1", isComplete: false, id: 1 },
];

const processRequestValidation = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json(handleValidationError(errors));
    res.status(400);
    return false;
  }
  return true;
};

const getTasks = (req, res) => {
  res.status(200);
  res.send(tasks);
};

const createTask = (req, res) => {
  const isValidationSuccess = processRequestValidation(req, res);
  if (!isValidationSuccess) return;

  const { description, title } = req.body;
  tasks.push({
    description: description,
    title: title,
    isComplete: false,
    id: idCounter,
  });
  idCounter += 1;
  res.status(200);
  res.send({ message: "Task added successfully." });
};

const getTask = (req, res) => {
  const isValidationSuccess = processRequestValidation(req, res);
  if (!isValidationSuccess) return;
  const task = tasks.find((t) => t.id == req.params.taskID);
  if (!task) {
    res.status(404);
    res.send(taskNotFound);
    return;
  }
  res.status(200);
  res.send(task);
};

const updateTask = (req, res) => {
  const isValidationSuccess = processRequestValidation(req, res);
  if (!isValidationSuccess) return;
  const taskIndex = tasks.findIndex((t) => t.id == req.params.taskID);
  if (taskIndex == -1) {
    res.status(404);
    res.send(taskNotFound);
    return;
  }
  const { description, title, isComplete } = req.body;
  const prevTask = tasks[taskIndex];
  const updatedDescription = description || prevTask.description;
  const updatedTitle = title || prevTask.title;
  const updatedIscomplete = isComplete || prevTask.isComplete;
  const updateTask = {
    ...prevTask,
    description: updatedDescription,
    title: updatedTitle,
    isComplete: updatedIscomplete,
  };
  tasks[taskIndex] = updateTask;
  res.status(200);
  res.send({ message: "Task updated successfully." });
};

const deleteTask = (req, res) => {
  const isValidationSuccess = processRequestValidation(req, res);
  if (!isValidationSuccess) return;
  const taskIndex = tasks.findIndex((t) => t.id == req.params.taskID);
  if (taskIndex == -1) {
    res.status(404);
    res.send(taskNotFound);
    return;
  }
  tasks.splice(taskIndex, 1);
  res.status(200);
  res.send({ message: "Task deleted successfully." });
};

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
