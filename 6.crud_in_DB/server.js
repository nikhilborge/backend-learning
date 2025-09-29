const express = require("express");
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/note.model");

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  await noteModel.create({
    title,
    content,
  });

  res.json({ message: "Note created successfully" });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.json({ message: "Note fetch successfully", notes });
});

app.delete("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  await noteModel.findOneAndDelete({ _id: noteId });

  res.json({ message: "Note deleted" });
});

app.patch("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  const { title } = req.body;
  await noteModel.findOneAndUpdate({ _id: noteId }, { title: title });
  res.json({ message: "Note updated successfully" });
});

connectToDB();

app.listen(3002, () => {
  console.log("server is running on 3002");
});
