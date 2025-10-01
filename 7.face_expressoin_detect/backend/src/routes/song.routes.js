const express = require("express");
const multer = require("multer");
const uplodFile = require("../service/storage.service");
const songModel = require("../models/song.model");

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() }); //temporary store in RAM

// cloud storage provider - ImageKit, cloudinary or more

router.post("/song", upload.single("audio"), async (req, res) => {
  //if the files are multiple then we add upload.array() here
  console.log(req.body);
  console.log(req.file);
  const fileData = await uplodFile(req.file);
  const song = await songModel.create({
    title: req.body.title,
    artist: req.body.artist,
    audio: fileData,
    mood: req.body.mood,
  });
  console.log(fileData);
  res.status(201).json({
    message: "song created successfully",
    song,
  });
});

router.get("/songs", async (req, res) => {
  const { mood } = req.query;
  const songs = await songModel.find({
    mood,
  });
  res.status(200).json({ message: "songs fetch successfully", songs });
});
module.exports = router;
