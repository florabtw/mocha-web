import {decode, encode} from './messages';

const blobToText = blob => {
  return new Promise(resolve => {
    const reader = new FileReader();

    reader.onload = () => {
      const line = reader.result;

      const packets = line.split('\n').filter(packet => packet.length > 0);

      resolve(packets);
    };

    reader.readAsText(blob);
  });
};

function Connection(socket) {
  socket.onmessage = async frame => {
    const packets = await blobToText(frame.data);

    packets.forEach(packet => console.debug(`RECV: ${packet}`));

    const messages = await Promise.all(packets.map(decode)).catch(
      e => console.error(e.message) || [],
    );

    messages.forEach(this.onMessage);
  };

  this.close = () => {
    socket.close();
  };

  this.send = message => {
    const packet = encode(message);

    console.debug(`SEND: ${packet}`);

    socket.send(`${packet}\n`);
  };
}

const connect = () => {
  return new Promise(resolve => {
    const socket = new WebSocket('ws://mocha.nick.exposed/proxy', ['binary']);

    socket.onopen = () => resolve(new Connection(socket));
  });
};

export default {connect};
