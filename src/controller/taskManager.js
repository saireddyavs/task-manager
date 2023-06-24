const { validationResult } = require('express-validator');
const { handleValidationError } = require('../errors/apiError');
const {
  getAllTasks,
  createNewTask,
  getTaskByID,
  updateTaskById,
  deleteTaskByID,
  getTasksForLevel,
} = require('../service/taskManager');

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
  const { filterBy, sortBy, filterValue } = req.query;
  const { statusCode, response } = getAllTasks({
    filterBy,
    sortBy,
    filterValue,
  });
  res.status(statusCode);
  res.send(response);
};

const createTask = (req, res) => {
  const isValidationSuccess = processRequestValidation(req, res);
  if (!isValidationSuccess) return;

  const { description, title } = req.body;
  const { statusCode, response } = createNewTask({ description, title });
  res.status(statusCode);
  res.send(response);
};

const getTask = (req, res) => {
  const isValidationSuccess = processRequestValidation(req, res);
  if (!isValidationSuccess) return;

  const { taskID } = req.params;
  const { statusCode, response } = getTaskByID({ taskID });
  res.status(statusCode);
  res.send(response);
};

const updateTask = (req, res) => {
  const isValidationSuccess = processRequestValidation(req, res);
  if (!isValidationSuccess) return;

  const { description, title, isComplete, priority } = req.body;
  const { taskID } = req.params;
  const { statusCode, response } = updateTaskById({
    description,
    title,
    isComplete,
    taskID,
    priority,
  });
  res.status(statusCode);
  res.send(response);
};

const deleteTask = (req, res) => {
  const isValidationSuccess = processRequestValidation(req, res);
  if (!isValidationSuccess) return;
  const { taskID } = req.params;
  const { statusCode, response } = deleteTaskByID({ taskID });
  res.status(statusCode);
  res.send(response);
};

const getTasksForPriorityLevel = (req, res) => {
  const isValidationSuccess = processRequestValidation(req, res);
  if (!isValidationSuccess) return;
  const { level } = req.params;
  const { statusCode, response } = getTasksForLevel({ level });
  res.status(statusCode);
  res.send(response);
};

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  getTasksForPriorityLevel,
};
