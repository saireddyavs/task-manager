const { taskNotFound } = require('../errors/apiError');

let idCounter = 1;

const tasks = [];

const getAllTasks = () => ({ statusCode: 200, response: tasks });

const createNewTask = ({ description, title }) => {
  tasks.push({
    description,
    title,
    isComplete: false,
    id: idCounter,
  });
  idCounter += 1;
  return {
    statusCode: 201,
    response: { message: 'Task Created Successfully.' },
  };
};

const getTaskByID = ({ taskID }) => {
  const task = tasks.find((t) => t.id === Number(taskID));
  if (!task) {
    return { statusCode: 404, taskNotFound };
  }
  return {
    statusCode: 200,
    response: { taskDetails: task },
  };
};

const updateTaskById = ({ description, title, isComplete, taskID }) => {
  const taskIndex = tasks.findIndex((t) => t.id === Number(taskID));
  if (taskIndex === -1) {
    return { statusCode: 404, taskNotFound };
  }
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
  return {
    statusCode: 200,
    response: { message: 'Task updated successfully.' },
  };
};

const deleteTaskByID = ({ taskID }) => {
  const taskIndex = tasks.findIndex((t) => t.id === Number(taskID));
  if (taskIndex === -1) {
    return { statusCode: 404, taskNotFound };
  }
  tasks.splice(taskIndex, 1);
  return {
    statusCode: 200,
    response: { message: 'Task deleted successfully.' },
  };
};
module.exports = {
  getAllTasks,
  createNewTask,
  getTaskByID,
  updateTaskById,
  deleteTaskByID,
};
