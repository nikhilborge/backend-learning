const express = require("express");
const connectToDB = require("./src/db/db");

connectToDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("home page");
});

app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  console.log(title, content);
});

app.listen(3004, (req, res) => {
  console.log("Server running on port 3004");
});
