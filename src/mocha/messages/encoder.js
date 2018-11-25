import {MessageTypes} from './messages';

const Move = ({id, x, y, name, xOffset, yOffset}) =>
  `MOVE ${id} ${x} ${y} ${name} ${xOffset} ${yOffset}`;

const RequestEntitiesByPlayerId = ({id}) =>
  `REQUEST_ENTITIES_BY_PLAYER_ID ${id}`;

const Encoders = {
  [MessageTypes.MOVE]: Move,
  [MessageTypes.REQUEST_ENTITIES_BY_PLAYER_ID]: RequestEntitiesByPlayerId,
};

const encode = message => {
  const encoder = Encoders[message.type];
  const packet = encoder(message);

  return packet;
};

export {encode};
