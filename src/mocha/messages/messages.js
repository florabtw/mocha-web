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
  id: Number(id),
});

const ChunkUpdate = (id, x, y, map) => ({
  type: MessageTypes.CHUNK_UPDATE,
  id: Number(id),
  map,
});

const EntityUpdate = (id, x, y, entityType) => ({
  type: MessageTypes.ENTITY_UPDATE,
  id: Number(id),
  x: Number(x),
  y: Number(y),
  entityType,
});

const LoginSuccess = id => ({type: MessageTypes.LOGIN_SUCCESS, id});

const ItemPrototypeUpdate = (id, name, spriteId, itemType, description) => ({
  type: MessageTypes.ITEM_PROTOTYPE_UPDATE,
  id: Number(id),
  name,
  spriteId: Number(spriteId),
  itemType,
  description,
});

const ItemUpdate = (id, prototypeId) => ({
  type: MessageTypes.ITEM_UPDATE,
  id: Number(id),
  prototypeId: Number(prototypeId),
});

const Move = (id, x, y, name, xOffset, yOffset) => ({
  type: MessageTypes.MOVE,
  id: Number(id),
  x: Number(x),
  y: Number(y),
  name,
  xOffset: Number(xOffset),
  yOffset: Number(yOffset),
});

const RequestEntitiesByPlayerId = (id, ...entityIds) => ({
  type: MessageTypes.REQUEST_ENTITIES_BY_PLAYER_ID,
  id: Number(id),
  entityIds: entityIds.map(id => Number(id)),
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
