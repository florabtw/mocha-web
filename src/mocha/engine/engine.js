import {MessageTypes} from '../messages';
import {Perceptors} from './perceptors';

const create = () => ({
  chunks: {},
  entities: {},
  self: {entities: [], isRunning: true},
});

const stop = () => ({
  chunks: {},
  entities: {},
  self: {entities: [], isRunning: false},
});

const perceptorMap = {
  [MessageTypes.ASSIGN_ENTITY]: Perceptors.assignEntity,
  [MessageTypes.CHUNK_UPDATE]: Perceptors.chunkUpdate,
  [MessageTypes.ENTITY_UPDATE]: Perceptors.entityUpdate,
  [MessageTypes.ITEM_PROTOTYPE_UPDATE]: Perceptors.itemPrototypeUpdate,
  [MessageTypes.ITEM_UPDATE]: Perceptors.itemUpdate,
  [MessageTypes.LOGIN_SUCCESS]: Perceptors.loginSuccess,
};

const apply = (state, message) => {
  const perceive = perceptorMap[message.type];
  const nextState = perceive(state, message);

  return nextState;
};

const engine = {apply, create, stop};

export default engine;
