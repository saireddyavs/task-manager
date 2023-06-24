const { check, param } = require('express-validator');
const {
  PRIORITY_LOW,
  PRIORITY_HIGH,
  PRIORITY_MEDIUM,
} = require('../constants/priority');

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
).isBoolean();

const taskIDValidation = param(
  'taskID',
  'taskID should be a valid positive number. Example:123'
).isNumeric();

const priorityLevelValidation = check(
  'priority',
  'Priority should be string. Example:low/medium/high'
)
  .isString()
  .isIn([PRIORITY_LOW, PRIORITY_HIGH, PRIORITY_MEDIUM]);

const priorityLevelValidationForParam = param(
  'level',
  'Priority should be string. Example:low/medium/high'
)
  .isString()
  .isIn([PRIORITY_LOW, PRIORITY_HIGH, PRIORITY_MEDIUM]);

const createTaskValidation = [
  titleValidationRequired,
  descriptionValidationRequired,
];

const updateTaskValidation = [
  taskIDValidation,
  isCompleteValidation.optional(),
  titleValidation.optional(),
  descriptionValidation.optional(),
  priorityLevelValidation.optional(),
];

module.exports = {
  createTaskValidation,
  taskIDValidation,
  updateTaskValidation,
  priorityLevelValidationForParam,
};
