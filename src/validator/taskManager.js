const { check, param } = require('express-validator');

const titleValidation = check(
  'title',
  'Title should be string. Example:Project Work'
)
  .notEmpty()
  .withMessage('Title Should not be empty')
  .isString();

const titleValidationRequired = titleValidation
  .exists()
  .withMessage('Title is not passed in the request');

const descriptionValidation = check(
  'description',
  'Description should be string. Example:Complete Project Work by 10:00PM'
)
  .notEmpty()
  .withMessage('Description Should not be empty')
  .isString();

const descriptionValidationRequired = descriptionValidation
  .exists()
  .withMessage('Description is not passed in the request');

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

const createTaskValidation = [
  titleValidationRequired,
  descriptionValidationRequired,
];

const updateTaskValidation = [
  taskIDValidation,
  isCompleteValidation,
  titleValidation.optional(),
  descriptionValidation.optional(),
];

module.exports = {
  createTaskValidation,
  taskIDValidation,
  updateTaskValidation,
};
