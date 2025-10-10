const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use("/auth", authRoutes);
module.exports = app;
