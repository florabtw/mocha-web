const MessageTypes = {
  CHUNK: Symbol('chunk'),
  ENTITY_UPDATE: Symbol('entity update'),
  ITEM_PROTOTYPE_UPDATE: Symbol('item prototype update'),
  ITEM_UPDATE: Symbol('item update'),
  LOGIN_SUCCESS: Symbol('login success'),
};

const Chunk = (id, map) => ({
  type: MessageTypes.CHUNK,
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
  Chunk,
  EntityUpdate,
  LoginSuccess,
  ItemPrototypeUpdate,
  ItemUpdate,
};

export {MessageTypes, Messages};
