## Task-Manager-Api

### About

A minimalist task manager API developed using Node.js and Express. This API provides endpoints for seamless CRUD (Create, Read, Update, Delete) operations.

### Built using

- [![Node][Node.js]][Node-url]
- [![Express][express.js]][express-url]
- [![EsLint][eslint.js]][eslint-url]
- [![Postman][postman.js]][postman-url]

### Getting started

1. Clone the repo

```
git clone https://github.com/saireddyavs/task-manager.git && cd task-manager
```

2. Install devepencies

```
npm install
```

3. Run the API locally

```
npm run start
```

You can access the api Endpoints at `localhost:3000`

Please refer to attached postaman collection for getting clear view of handled flows and error cases.

## Endpoints - Short Description

| Method | Path                | Description                 |
| ------ | ------------------- | --------------------------- |
| GET    | /v1/tasks           | Get a list of all tasks     |
| POST   | /v1/tasks           | Create a new task           |
| GET    | /v1/tasks/:taskId   | Get a specific task by ID   |
| PUT    | /v1/tasks/:taskId   | Update a task by ID         |
| DELETE | /v1/tasks/:taskId   | Delete a task by ID         |
| GET    | /v1/priority/:level | Get tasks by priority level |

## Endpoints - Long Description

| Endpoint                          | Description                                                           | Request Validation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Additional Details                                                                                |
| --------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **GET /v1/tasks**                 | Retrieve a list of all created tasks.                                 | - Filter and sort tasks based on criteria.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                   |
| **POST /v1/tasks**                | Create a new task with a title and description.                       | - Ensure that the description is required, not empty, and is a string. <br> - Ensure that the title is required, not empty, and is a string. <br> - If multiple request validation errors occur, they are returned as an array.                                                                                                                                                                                                                                                                                                   | Create a new task with a title, description, unique ID, and set the `isComplete` flag to `false`. |
| **GET /v1/tasks/:taskID**         | Get information related to a specific task identified by `taskID`.    | - Validate if the `taskID` provided is a valid number. <br> - Validate if the `taskID` exists among the list of tasks. <br> - If multiple request validation errors occur, they are returned as an array.                                                                                                                                                                                                                                                                                                                         | Return task details if the `taskID` is valid and exists.                                          |
| **PUT /v1/tasks/:taskID**         | Update information related to a specific task identified by `taskID`. | - Validate if the `taskID` provided is a valid number. <br> - Validate if the `taskID` exists among the list of tasks. <br> - Validate optional description, ensuring it's not empty and is a string. <br> - Validate optional title, ensuring it's not empty and is a string. <br> - Validate optional `isComplete`, ensuring it's a boolean. <br> - Validate optional priority, ensuring it's a string and one of ['low', 'medium', 'high']. <br> - If multiple request validation errors occur, they are returned as an array. | Update the task information if the `taskID` is valid and exists.                                  |
| **DELETE /v1/tasks/:taskID**      | Delete information related to a specific task identified by `taskID`. | - Validate if the `taskID` provided is a valid number. <br> - Validate if the `taskID` exists among the list of tasks. <br> - If multiple request validation errors occur, they are returned as an array.                                                                                                                                                                                                                                                                                                                         | Delete the task if the `taskID` is valid and exists.                                              |
| **GET /v1/tasks/priority/:level** | Retrieve all tasks with the specified priority level.                 | - Validate if the priority level provided in the request is valid. <br> - If multiple request validation errors occur, they are returned as an array.                                                                                                                                                                                                                                                                                                                                                                             | Return all tasks with the same priority level based on the request parameter.                     |

## References:

## Express.js Project Structure

**Reference**: [Organizing Express.js Project Structure for Better Productivity](https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/)

This article offers insights into structuring your Express.js project for improved productivity. It provides guidelines for organizing your codebase effectively.

## CORS (Cross-Origin Resource Sharing)

**Reference**: [How to Use CORS in Node.js with Express](https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express)

Learn how to implement Cross-Origin Resource Sharing (CORS) in your Node.js application using Express. This resource explains the importance of CORS and provides step-by-step instructions for configuration.

## Body Parser Middleware

**Reference**: [Stack Overflow Answer on Body Parser](https://stackoverflow.com/a/39872729/11652193)

This Stack Overflow answer offers a concise explanation of the Body Parser middleware in Node.js. It's a helpful resource for understanding how to parse incoming request bodies in your Express application.

## Morgan Logger

**Reference**: [Morgan - HTTP Request Logger](https://www.npmjs.com/package/morgan)

Morgan is a widely used Node.js package for logging HTTP requests. This official npm page provides documentation and usage examples. It's a valuable tool for tracking and analyzing incoming requests in your Express app.

[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[express-url]: https://expressjs.com/
[eslint.js]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[eslint-url]: https://eslint.org/
[postman.js]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white
[postman-url]: https://www.postman.com/
