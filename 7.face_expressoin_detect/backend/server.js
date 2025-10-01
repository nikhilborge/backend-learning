require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB();

app.listen(3002, () => {
  console.log("Server is runnig on port 3002");
});
