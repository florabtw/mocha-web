import {Messages} from './messages';

const requestEntitiesByPlayerId = state => {
  return Messages.RequestEntitiesByPlayerId(state.self.id);
};

const moveDown = state => {
  return Messages.Move(1, 0, 0, 'EAST', 0, 0);
};

const moveLeft = state => {
  return Messages.Move(1, 0, 0, 'EAST', 0, 0);
};

const moveRight = state => {
  return Messages.Move(1, 0, 0, 'EAST', 0, 0);
};

const moveUp = state => {
  return Messages.Move(1, 0, 0, 'EAST', 0, 0);
};

const Actions = {
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  requestEntitiesByPlayerId,
};

export {Actions};
