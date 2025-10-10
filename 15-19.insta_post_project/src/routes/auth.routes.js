const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const router = express.Router();

// post - /register
// post - /login
// get - /user [protected]

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await userModel.findOne({
    username,
  });

  if (existingUser) {
    return res.status(409).json({ message: "Username already exists" });
  }
  const user = await userModel.create({ username, password });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(201).json({ message: "user created successfully", user, token });
});
module.exports = router;
