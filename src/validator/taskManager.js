const { check, param } = require("express-validator");

const titleValidation = check("title", "Title should be string")
  .notEmpty()
  .isString();

const descriptionValidation = check(
  "description",
  "Description should be string"
)
  .notEmpty()
  .isString();

const isCompleteValidation = check(
  "isComplete",
  "isComplete should be boolean"
).isBoolean();

const taskIDValidation = param(
  "taskID",
  "taskID should be a valid positive number"
).isNumeric();

const createTaskValidation = [titleValidation, descriptionValidation];

module.exports = { createTaskValidation, taskIDValidation };
