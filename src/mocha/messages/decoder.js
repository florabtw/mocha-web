import {MessageTypes, Messages} from './messages';

const Decoders = {
  [MessageTypes.CHUNK_UPDATE]: Messages.ChunkUpdate,
  [MessageTypes.ENTITY_UPDATE]: Messages.EntityUpdate,
  [MessageTypes.LOGIN_SUCCESS]: Messages.LoginSuccess,
  [MessageTypes.ITEM_PROTOTYPE_UPDATE]: Messages.ItemPrototypeUpdate,
  [MessageTypes.ITEM_UPDATE]: Messages.ItemUpdate,
  [MessageTypes.MOVE]: Messages.Move,
  [MessageTypes.REQUEST_ENTITIES_BY_PLAYER_ID]:
    Messages.RequestEntitiesByPlayerId,
};

const decode = async packet => {
  const [prefix, ...rest] = packet.split(' ');

  const decoder = Decoders[prefix];

  if (!decoder) {
    throw new Error(`Received unknown message: ${packet}`);
  }

  return decoder(...rest);
};

export {decode};
