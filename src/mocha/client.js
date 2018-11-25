import {decode, encode} from './messages';

const blobToText = blob => {
  return new Promise(resolve => {
    const reader = new FileReader();

    reader.onload = () => {
      const line = reader.result;
      const text = line.slice(0, -1);
      resolve(text);
    };

    reader.readAsText(blob);
  });
};

function Connection(socket) {
  socket.onmessage = packet => {
    blobToText(packet.data)
      .then(decode)
      .then(this.onMessage)
      .catch(e => console.log(e.message));
  };

  this.close = () => {
    socket.close();
  };

  this.send = message => {
    const packet = encode(message);
    socket.send(packet);
  };
}

const connect = () => {
  return new Promise(resolve => {
    const socket = new WebSocket('ws://mocha.nick.exposed/proxy', ['binary']);

    socket.onopen = () => resolve(new Connection(socket));
  });
};

export default {connect};
