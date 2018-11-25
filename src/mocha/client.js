import {decode, encode} from './messages';

const blobToText = blob => {
  return new Promise(resolve => {
    const reader = new FileReader();

    reader.onload = () => {
      const line = reader.result;

      // weird bug - receiving multiple messages from proxy
      const packets = line.split('\n').filter(packet => packet.length > 0);

      resolve(packets);
    };

    reader.readAsText(blob);
  });
};

function Connection(socket) {
  socket.onmessage = frame => {
    blobToText(frame.data)
      .then(packets => Promise.all(packets.map(decode)))
      .then(messages => messages.forEach(this.onMessage))
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
