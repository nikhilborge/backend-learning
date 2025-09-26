const express = require("express");

const app = express();
// we have to use middleware to get req.body data
app.use(express.json());

let notes = [];

app.get("/home", (req, res) => {
  res.send("hello");
});

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({
    message: "Note added successfully",
    notes: notes,
  });
});

app.listen(3002, (req, res) => {
  console.log("server running on port 3000");
});
