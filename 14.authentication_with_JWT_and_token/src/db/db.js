const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log(err, "err");
    });
}

module.exports = connectDB;
