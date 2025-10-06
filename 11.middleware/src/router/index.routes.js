const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("this middleware is between router and api");
  next();
});
router.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

module.exports = router;

//midleware can modify the request
//middlewware can send the response to the server
// req is going through middleware

// app -> middleware -> router -> middleware-> api
