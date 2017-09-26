/* eslint-disable brace-style, no-console */

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  ws.on('message', message => {
    let msg;

    try {
      msg = JSON.parse(message);
    } catch (e) {
      return console.error('Invalid JSON message');
    }

    if (msg.type === 'message') {
      console.log('Received: %s', JSON.stringify(msg));

      ws.send(JSON.stringify({
        message: 'Got It!',
        type: 'message'
      }));
    }
    // console.log(wss.clients);
  });

  ws.send(JSON.stringify({
    message: 'Connected to WS',
    type: 'message'
  }));
});
