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

const Perceptors = {
  chunkUpdate,
  entityUpdate,
  loginSuccess,
  itemUpdate,
  itemPrototypeUpdate,
};

export {Perceptors};
