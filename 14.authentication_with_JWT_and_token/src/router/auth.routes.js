const express = require("express");
const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.create({
    username,
    password,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECCRET);
  res.cookie("token", token);
  if (user) {
    return res
      .status(201)
      .json({ message: "user registered successfully", user });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username: username });
  if (!user) {
    return res.status(401).json({ message: "Invalid user name" });
  }
  const isPasswordValid = password === user.password;

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

  res.status(200).json({ message: "user logged in successfully", user });
});
router.get("/user", async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "Unauthorize" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECCRET);
    const user = await userModel
      .findOne({ _id: decoded.id })
      .select("-password -__v");
    res.status(200).json({ message: "user data fetched successfully", user });
  } catch (err) {
    return res.status(401).json({ message: "Unauthorize - Invalid token" });
  }
});

module.exports = router;
