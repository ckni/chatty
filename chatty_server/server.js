const express = require('express');
const SocketServer = require('ws').Server;
const generateUUID = require('node-uuid');
const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

function broadcast(data) {
  for(let client of wss.clients) {
    client.send(data);
  }
}

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', msg => {
    const message = JSON.parse(msg);
    message.id = generateUUID();

    broadcast(JSON.stringify(message));
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
