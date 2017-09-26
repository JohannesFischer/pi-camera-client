/* eslint-disable brace-style */

export const socket = new WebSocket('ws://0.0.0.0:8080', 'protocolOne');

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
