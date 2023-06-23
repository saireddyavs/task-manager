const { check, validationResult } = require("express-validator");

const titleValidation = check("title", "Title should be string").isString();

const descriptionValidation = check(
  "description",
  "Description should be string"
).isString();

const isCompleteValidation = check(
  "isComplete",
  "isComplete should be boolena"
).isBoolean();

const createTaskValidation = [titleValidation, descriptionValidation];

module.exports = { createTaskValidation };
