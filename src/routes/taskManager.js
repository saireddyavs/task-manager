const taskManagerRoutes = require("express").Router();
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");

taskManagerRoutes.use(bodyParser.json());
taskManagerRoutes.use(bodyParser.urlencoded({ extended: false }));

const tasks = [
  { title: "Title-1", description: "description-1", isComplete: false, id: 1 },
];

taskManagerRoutes.get("/", (req, res) => {
  res.status(200);
  res.send(tasks);
});

taskManagerRoutes.post(
  "/",
  [
    check("title", "Title should be string").isString(),
    check("description", "Description should be string").isString(),
    check("isComplete", "isComplete should be boolean").isBoolean(),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.json(errors);
      res.status(400);
      console.log(errors);
      return;
    }

    tasks.push(req.body);
    res.status(200);
    res.send(tasks);
  }
);

module.exports = taskManagerRoutes;
