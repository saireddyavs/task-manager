const taskManagerRoutes = require('express').Router();
const bodyParser = require('body-parser');
const {
  getTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
  getTasksForPriorityLevel,
} = require('@controller/taskManager');
const {
  createTaskValidation,
  taskIDValidation,
  updateTaskValidation,
  getTasksValidation,
  priorityLevelValidationForParam,
} = require('@validation/taskManager');

taskManagerRoutes.use(bodyParser.json());
taskManagerRoutes.use(bodyParser.urlencoded({ extended: false }));

taskManagerRoutes.get('/', getTasksValidation, getTasks);

taskManagerRoutes.post('/', createTaskValidation, createTask);

taskManagerRoutes.get('/:taskID', taskIDValidation, getTask);

taskManagerRoutes.put('/:taskID', updateTaskValidation, updateTask);

taskManagerRoutes.delete('/:taskID', taskIDValidation, deleteTask);

taskManagerRoutes.get(
  '/priority/:level',
  priorityLevelValidationForParam,
  getTasksForPriorityLevel
);

module.exports = taskManagerRoutes;
