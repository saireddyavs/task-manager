const taskManagerRoutes = require('express').Router();
const bodyParser = require('body-parser');
const {
  getTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
} = require('../controller/taskManager');
const {
  createTaskValidation,
  taskIDValidation,
  updateTaskValidation,
} = require('../validator/taskManager');

taskManagerRoutes.use(bodyParser.json());
taskManagerRoutes.use(bodyParser.urlencoded({ extended: false }));

taskManagerRoutes.get('/', getTasks);

taskManagerRoutes.post('/', createTaskValidation, createTask);

taskManagerRoutes.get('/:taskID', taskIDValidation, getTask);

taskManagerRoutes.put('/:taskID', updateTaskValidation, updateTask);

taskManagerRoutes.delete('/:taskID', taskIDValidation, deleteTask);

module.exports = taskManagerRoutes;
