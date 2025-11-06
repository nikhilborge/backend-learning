require("dotenv").config();
const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResonse = require("./src/service/ai.service");

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: { origin: "http://localhost:5173" },
});

// const chatHistory = [
//   {
//     role: "user",
//     parts: [{ text: "who was the PM of India in 2019?" }],
//   },
//   {
//     role: "model",
//     parts: [
//       {
//         text: "The Prime Minister of India in 2019 was **Narendra Modi**",
//       },
//     ],
//   },
// ];

// short term memory stored in server ram after restert server it get cleared
const chatHistory = [];

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("ai-message", async (data) => {
    console.log(data, "data--------");

    chatHistory.push({ role: "user", parts: [{ text: data }] });

    const response = await generateResonse(chatHistory);
    chatHistory.push({ role: "model", parts: [{ text: response }] });
    console.log("message recieved", response);

    socket.emit("ai-message-response", { response: response });
  });
});

httpServer.listen(3002, () => {
  console.log("server is running on port 3002");
});
