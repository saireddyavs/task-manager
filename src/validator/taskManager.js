const { check, param } = require("express-validator");

const titleValidation = check(
  "title",
  "Title should be string. Example:'Project Work"
)
  .notEmpty()
  .isString();

const descriptionValidation = check(
  "description",
  "Description should be string. Example:'Complete Project Work by 10:00PM'"
)
  .notEmpty()
  .isString();

const isCompleteValidation = check(
  "isComplete",
  "isComplete should be boolean. Example: true/false"
)
  .isBoolean()
  .optional();

const taskIDValidation = param(
  "taskID",
  "taskID should be a valid positive number. Example:123"
).isNumeric();

const createTaskValidation = [titleValidation, descriptionValidation];

const updateTaskValidation = [taskIDValidation, isCompleteValidation];

module.exports = {
  createTaskValidation,
  taskIDValidation,
  updateTaskValidation,
};
