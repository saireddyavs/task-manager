const { check, param } = require('express-validator');

const titleValidation = check(
  'title',
  'Title should be string. Example:Project Work'
)
  .exists()
  .withMessage('Title is not passed in the request')
  .notEmpty()
  .withMessage('Title Should not be empty')
  .isString();

const descriptionValidation = check(
  'description',
  'Description should be string. Example:Complete Project Work by 10:00PM'
)
  .exists()
  .withMessage('Description is not passed in the request')
  .notEmpty()
  .withMessage('Description Should not be empty')
  .isString();

const isCompleteValidation = check(
  'isComplete',
  'isComplete should be boolean. Example: true/false'
)
  .isBoolean()
  .optional();

const taskIDValidation = param(
  'taskID',
  'taskID should be a valid positive number. Example:123'
).isNumeric();

const createTaskValidation = [titleValidation, descriptionValidation];

const updateTaskValidation = [taskIDValidation, isCompleteValidation];

module.exports = {
  createTaskValidation,
  taskIDValidation,
  updateTaskValidation,
};
