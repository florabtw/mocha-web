import {parseMap} from '../map.js';

const chunkUpdate = (state, message) => {
  const oldChunk = state.chunks[message.id];
  const newChunk = {...oldChunk, tiles: parseMap(message.map)};

  return {
    ...state,
    chunks: {
      ...state.chunks,
      [message.id]: newChunk,
    },
  };
};

const loginSuccess = (state, message) => {
  const oldSelf = state.self;
  const newSelf = {...oldSelf, id: message.id};

  return {
    ...state,
    self: newSelf,
  };
};

const entityUpdate = (state, message) => {
  if (message.entityType === 'ITEM') return state;

  const oldEntity = state.entities[message.id] || {};
  const newEntity = {...oldEntity, x: message.x, y: message.y};

  return {
    ...state,
    entities: {
      ...state.entities,
      [message.id]: newEntity,
    },
  };
};

const itemUpdate = (state, message) => {
  return state;
};

const itemPrototypeUpdate = (state, message) => {
  return state;
};

const move = (state, {id, x, y, xOffset, yOffset}) => {
  const oldEntity = state.entities[id];
  const newEntity = {...oldEntity, x: x + xOffset, y: y + yOffset};

  return {
    ...state,
    entities: {
      ...state.entities,
      [id]: newEntity,
    },
  };
};

const requestEntitiesByPlayerId = (state, message) => {
  const oldSelf = state.self;
  const newSelf = {
    ...oldSelf,
    entities: [...oldSelf.entities, ...message.entityIds],
  };

  return {
    ...state,
    self: newSelf,
  };
};

const Perceptors = {
  chunkUpdate,
  entityUpdate,
  loginSuccess,
  move,
  itemUpdate,
  itemPrototypeUpdate,
  requestEntitiesByPlayerId,
};

export {Perceptors};
