const express = require("express");
const SocketServer = require("ws").Server;
const generateUUID = require("node-uuid");
const PORT = 3001;

const server = express()
  .use(express.static("public"))
  .listen(PORT, "0.0.0.0", "localhost", () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

function broadcast(data) {
  for(let client of wss.clients) {
    client.send(data);
  }
}

let userCount = 0;

function createMessage() {
  return {
    id: generateUUID(),
    color: "chatty",
    content: userCount,
    type: "userCount",
    username: "[Chatty]"
  };
}

function generateColor() {
  const hexChars = "0123456789ABCDEF";
  let hex = "#";

  for (var i = 0; i < 6; i++) {
    hex += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
  }

  return hex;
}

wss.on("connection", (ws) => {
  console.log("Client connected");
  const color = generateColor();
  userCount ++;
  broadcast(JSON.stringify(createMessage()));

  ws.on("message", msg => {
    const message = JSON.parse(msg);
    message.id = generateUUID();
    message.color = color;

    if (message.type === "nameChange") {
      message.color = "chatty";
    }

    broadcast(JSON.stringify(message));
  });

  ws.on("close", () => {
    console.log("Client disconnected");
      userCount --;
      broadcast(JSON.stringify(createMessage()));
  });
});
