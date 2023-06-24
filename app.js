const express = require('express');

const routes = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const taskManager = require('./src/routes/taskManager');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

// https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express
app.use(cors({ origin: '*', methods: ['POST', 'GET', 'PUT', 'DELETE'] }));

// https://stackoverflow.com/a/39872729/11652193
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// https://www.npmjs.com/package/morgan
app.use(morgan('tiny'));

app.use(routes);

routes.use('/tasks', taskManager);

app.get('/', (req, res) => {
  res.status(200);
  res.send('Welcome to the Task Manager API');
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
