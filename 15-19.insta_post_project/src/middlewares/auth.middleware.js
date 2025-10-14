const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

//route level middleware
async function authMiddleware(req, res, next) {
  const token = req.cookies.tokn;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access, please login first",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({ _id: decoded.id });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json("Invalid token Please login again");
  }
}

module.exports = authMiddleware;
