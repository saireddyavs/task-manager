const { taskNotFound } = require('../errors/apiError');
const { PRIORITY_LOW } = require('../constants/priority');

let idCounter = 1;

const tasks = [];

const getAllTasks = () => ({ statusCode: 200, response: tasks });

const createNewTask = ({ description, title }) => {
  tasks.push({
    description,
    title,
    isComplete: false,
    id: idCounter,
    priority: PRIORITY_LOW,
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
    return { statusCode: 404, response: taskNotFound };
  }
  return {
    statusCode: 200,
    response: { taskDetails: task },
  };
};

const updateTaskById = ({
  description,
  title,
  isComplete,
  taskID,
  priority,
}) => {
  const taskIndex = tasks.findIndex((t) => t.id === Number(taskID));
  if (taskIndex === -1) {
    return { statusCode: 404, response: taskNotFound };
  }
  const prevTask = tasks[taskIndex];
  const updatedDescription = description || prevTask.description;
  const updatedTitle = title || prevTask.title;
  const updatedIscomplete = isComplete || prevTask.isComplete;
  const updatedPriority = priority || prevTask.priority;
  const updateTask = {
    ...prevTask,
    description: updatedDescription,
    title: updatedTitle,
    isComplete: updatedIscomplete,
    priority: updatedPriority,
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
    return { statusCode: 404, response: taskNotFound };
  }
  tasks.splice(taskIndex, 1);
  return {
    statusCode: 200,
    response: { message: 'Task deleted successfully.' },
  };
};

const getTasksForLevel = ({ level }) => {
  const tasksForPriorityLevel = tasks.filter((task) => task.priority === level);
  if (tasksForPriorityLevel.length === 0) {
    return {
      statusCode: 404,
      response: {
        message: `There are currently no tasks with priority level:${level}`,
      },
    };
  }
  return { statusCode: 200, response: { tasks: tasksForPriorityLevel } };
};
module.exports = {
  getAllTasks,
  createNewTask,
  getTaskByID,
  updateTaskById,
  deleteTaskByID,
  getTasksForLevel,
};
