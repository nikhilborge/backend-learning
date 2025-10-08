const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./router/auth.routes");

const app = express();
app.use(express.json());
app.use(cookieParser()); //application level middleware

// POST / auth / register;
// POST / auth / login;
// GET / auth / user;
// GET / auth / logout;

app.use("/auth", authRoutes);

module.exports = app;
