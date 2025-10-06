const express = require("express");
const indexRoutes = require("./router/index.routes");

const app = express();
app.use(express.json()); // this one is middleware buil in 
app.use((req, res, next) => {
  console.log("This middleware is between app and route");
  next(); //request cannot get ahead if we cannot add the next()
});
app.use("/", indexRoutes);

module.exports = app;

//types of middleware in express
// application-level middleware
// router - level middleware
// error - handling middleware
// built-in-middlware
//third-party middleware
//morgan middleware
