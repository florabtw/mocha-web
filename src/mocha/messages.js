const MessageTypes = {
  CHUNK_UPDATE: Symbol('chunk update'),
  ENTITY_UPDATE: Symbol('entity update'),
  ITEM_PROTOTYPE_UPDATE: Symbol('item prototype update'),
  ITEM_UPDATE: Symbol('item update'),
  LOGIN_SUCCESS: Symbol('login success'),
};

const ChunkUpdate = (id, map) => ({
  type: MessageTypes.CHUNK_UPDATE,
  id,
  map,
});

const EntityUpdate = (id, x, y) => ({
  type: MessageTypes.ENTITY_UPDATE,
  id,
  x,
  y,
});

const LoginSuccess = id => ({type: MessageTypes.LOGIN_SUCCESS, id});

const ItemPrototypeUpdate = (id, name, spriteId, itemType, description) => ({
  type: MessageTypes.ITEM_PROTOTYPE_UPDATE,
  id,
  name,
  spriteId,
  itemType,
  description,
});

const ItemUpdate = (id, prototypeId) => ({
  type: MessageTypes.ITEM_UPDATE,
  id,
  prototypeId,
});

const Messages = {
  ChunkUpdate,
  EntityUpdate,
  LoginSuccess,
  ItemPrototypeUpdate,
  ItemUpdate,
};

export {MessageTypes, Messages};
