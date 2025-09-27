const express = require("express");

const app = express();
app.use(express.json());

const notes = [];

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.send({
    message: "note added successfully",
    notes,
  });
});

app.patch("/notes/:index", (req, res) => {
  const { title, description } = req.body;
  const index = req.params.index;
  notes[index].title = title;
  notes[index].description = description;

  res.json({
    message: "note updated successfully",
  });
});

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.json({ message: "note deleted successfully" });
});

app.listen(3002, () => {
  console.log("server is running on port 3002");
});
