const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/", (req, res) => {
  res.send("Hello world");
});

module.exports = app;
