const express = require("express");
const loggerMiddleware = require("./loggerMiddleware");

const app = express();

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("Logger middleware is working!");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});