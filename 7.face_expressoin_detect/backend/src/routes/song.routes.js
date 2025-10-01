const express = require("express");
const multer = require("multer");
const uplodFile = require("../service/storage.service");

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() }); //temporary store in RAM

// cloud storage provider - ImageKit, cloudinary or more

router.post("/song", upload.single("audio"), async (req, res) => {
  //if the files are multiple then we add upload.array() here
  console.log(req.body);
  console.log(req.file);
  const fileData = await uplodFile(req.file);
  console.log(fileData);
  res.status(201).json({
    message: "song created successfully",
    song: req.body,
  });
});

module.exports = router;
