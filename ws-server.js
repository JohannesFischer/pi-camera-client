/* eslint-disable brace-style, no-console */

const WebSocket = require('ws');
const port = Config.ws.port; //9090;
const wss = new WebSocket.Server({ port });

console.log('WS server started on ws://0.0.0.0:%s', port);

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
