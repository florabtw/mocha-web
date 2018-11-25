import {MessageTypes} from './messages';

const Move = ({id, x, y, name, xOffset, yOffset}) =>
  `MOVE ${id} ${x} ${y} ${name} ${xOffset} ${yOffset}`;

const Encoders = {
  [MessageTypes.MOVE]: Move,
};

const encode = message => {
  const encoder = Encoders[message.type];
  const packet = encoder(message);

  return packet;
};

export {encode};
