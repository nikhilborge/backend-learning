const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

app.listen(3004, () => {
  console.log("server is running in the localhost 3004");
});
