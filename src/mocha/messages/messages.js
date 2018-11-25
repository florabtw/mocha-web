const MessageTypes = {
  ASSIGN_ENTITY: 'ASSIGN_ENTITY',
  CHUNK_UPDATE: 'CHUNK_UPDATE',
  ENTITY_UPDATE: 'ENTITY_UPDATE',
  ITEM_PROTOTYPE_UPDATE: 'ITEM_PROTOTYPE_UPDATE',
  ITEM_UPDATE: 'ITEM_UPDATE',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  MOVE: 'MOVE',
  REQUEST_ENTITIES_BY_PLAYER_ID: 'REQUEST_ENTITIES_BY_PLAYER_ID',
};

const AssignEntity = id => ({
  type: MessageTypes.ASSIGN_ENTITY,
  id,
});

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

const Move = (id, x, y, name, xOffset, yOffset) => ({
  type: MessageTypes.MOVE,
  id,
  x,
  y,
  name,
  xOffset,
  yOffset,
});

const RequestEntitiesByPlayerId = (id, ...entityIds) => ({
  type: MessageTypes.REQUEST_ENTITIES_BY_PLAYER_ID,
  id,
  entityIds,
});

const Messages = {
  AssignEntity,
  ChunkUpdate,
  EntityUpdate,
  LoginSuccess,
  ItemPrototypeUpdate,
  ItemUpdate,
  Move,
  RequestEntitiesByPlayerId,
};

export {MessageTypes, Messages};
