const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect("mongodb+srvuri/test")
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log("note connected to db");
    });
}

module.exports = connectToDB;
