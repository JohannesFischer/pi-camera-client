const WebSocket = require('ws');
const config = require('./config');
const port = config.ws.port;
const wss = new WebSocket.Server({ port });

console.log('WS server started on ws://0.0.0.0:%s', port);

function getStatus() {
  return {
    clients: wss.clients.size,
    stream: {
      live: false
    }
  };
};

wss.on('connection', ws => {
  console.log('incoming connection');

  ws.on('message', message => {
    let msg;
    console.log(msg);

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
    data: getStatus(),
    type: 'status'
  }));
});
