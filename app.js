const express = require("express");
const cors = require("cors");
const router = express().router();

const app = express();
const PORT = 3000;

// https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express
app.use(cors({ origin: "*", methods: ["POST", "GET"] }));

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
