## Task-Manager-Api

### About

A simple manager api build using node and express. The API includes endpoints which can do CRUD operation.

### Built with

- [![Node][Node.js]][Node-url]
- [![Express][express.js]][express-url]

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

### List of available endpoints

1. **GET /tasks**

   Get all the tasks created.

2. **POST /tasks**

   create a new task with title and description.

   - Validates if description is required, not empty and is string.
   - Validates if title is required, not empty and is string.
   - creates a new task with title,descriptiom,id and isComplete flag set to false

3. **GET /tasks/:taskID**

   Get information related to task with specific taskID

   - Validates if taskID passed is valid number
   - Validates if taskID is present among the list of tasks
   - Return the taskDetails of task if taskID is valid and present.

4. **PUT /tasks/:taskID**

   Update Information realted to specific task with taskID

   - Validates if taskID passed is valid number
   - Validates if taskID is present among the list of tasks
   - Updates the task information if taskID passed is valid and present

5. **DELETE /tasks/:taskID**

   Delete Information related to specific task with taskID

   - Validates if taskID passed is valid number
   - Validates if taskID is present among the list of tasks
   - Deletes the task if taskID passed is valid and present

## References:

project structue : https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/

Cors : https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express

bodyParser: https://stackoverflow.com/a/39872729/11652193

morgan: https://www.npmjs.com/package/morgan

[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[express-url]: https://expressjs.com/
