const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://"
    )
    .then(() => {
      console.log("connected to DB");
    })
    .catch(() => {
      console.log("something went wrong");
    });
}

module.exports = connectToDB;

