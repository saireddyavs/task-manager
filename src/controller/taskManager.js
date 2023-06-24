const { validationResult } = require('express-validator');
const { handleValidationError } = require('../errors/apiError');
const {
  getAllTasks,
  createNewTask,
  getTaskByID,
  updateTaskById,
  deleteTaskByID,
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
  const { statusCode, response } = getAllTasks();
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

  const { description, title, isComplete } = req.body;
  const { taskID } = req.params;
  const { statusCode, response } = updateTaskById({
    description,
    title,
    isComplete,
    taskID,
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

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
