const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true, //schema level validation
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
