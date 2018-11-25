import {MessageTypes} from './messages';
import {Handlers} from './handlers';

const TileTypes = {
  GRASS: Symbol('grass'),
  DIRT: Symbol('dirt'),
  WATER: Symbol('water'),
  STONE: Symbol('stone'),
};

const create = () => ({
  chunks: {},
  entities: {},
  self: {},
});

const handlerMap = {
  [MessageTypes.CHUNK_UPDATE]: Handlers.chunkUpdate,
  [MessageTypes.ENTITY_UPDATE]: Handlers.entityUpdate,
  [MessageTypes.ITEM_PROTOTYPE_UPDATE]: Handlers.itemPrototypeUpdate,
  [MessageTypes.ITEM_UPDATE]: Handlers.itemUpdate,
  [MessageTypes.LOGIN_SUCCESS]: Handlers.loginSuccess,
};

const apply = (state, message) => {
  const handler = handlerMap[message.type];
  const nextState = handler(state, message);
  return nextState;
};

const engine = {apply, create};

export default engine;
