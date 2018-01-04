<template>
  <div class="ws-panel">
    <h3>Web Socket Panel</h3>
    <code>{{ status }}</code>
  </div>
</template>

<script>
// let status = undefined;
// export const socket = new WebSocket('ws://0.0.0.0:9090', 'protocolOne');

// socket.onmessage = (event) => {
//   let msg;

//   try {
//     msg = JSON.parse(event.data);
//   } catch (e) {
//     return console.error('Invalid JSON message');
//   }

//   if (msg.type === 'message') {
//     console.info('Received: %s', msg.message);
//   }

//   if (msg.type === 'status') {
//     status = msg.status;
//     console.log(msg);
//   }
// };

const ws = new WebSocket('ws://0.0.0.0:9090', 'protocolOne');

export default {
  name: 'WebSocketPanel',
  created() {
    ws.onmessage = event => {
      this.updatePanel(event.data);
    }
  },
  data() {
    return {
      status: {}
    };
  },
   methods: {
    send () {
      ws.send({
        data: 'Hello',
        type: 'message'
      })
    },
    updatePanel(status) {
      this.status = status;
    }
  }
};
</script>

<style scoped>
  .ws-panel {
    background: yellow;
    color: #333;
  }
</style>
