import { parse } from './parser';

function Connection(socket) {
  socket.onmessage = message => {
    parse(message).then(this.onMessage);
  };

  this.close = () => {
    socket.close();
  };

  this.send = message => {
    socket.send(message);
  };
}

const connect = () => {
  return new Promise(resolve => {
    const socket = new WebSocket('ws://dev.nick.exposed:9000', ['binary']);

    socket.onopen = () => resolve(new Connection(socket));
  });
};

export default { connect };
