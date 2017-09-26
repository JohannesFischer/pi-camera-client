/* eslint-disable brace-style */

import Config from '../config';

export const socket = new WebSocket(`ws://${Config.ws.host}:${Config.ws.port}`, 'protocolOne');

// socket.onopen = () => {
//   socket.send('hello');
// };

socket.onmessage = (event) => {
  let msg;

  try {
    msg = JSON.parse(event.data);
  } catch (e) {
    return console.error('Invalid JSON message');
  }

  if (msg.type === 'message') {
    console.info('Received: %s', msg.message);
  }
};
