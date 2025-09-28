const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://exnikhilborge_db_user:aq62BkT1xdDbMhEf@cluster0.iverwh3.mongodb.net/cohort"
    )
    .then(() => {
      console.log("connected to DB");
    })
    .catch(() => {
      console.log("something went wrong");
    });
}

module.exports = connectToDB;
