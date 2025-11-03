require("dotenv").config();
const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResonse = require("./src/service/ai.service");

const httpServer = createServer(app);

const io = new Server(httpServer, {});

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("ai-message", async (data) => {
    console.log(data, "data--------");
    const response = await generateResonse(data);
    console.log("message recieved", response);

    socket.emit("ai-message-response", { response: response });
  });
});

httpServer.listen(3002, () => {
  console.log("server is running on port 3002");
});
