import {Messages} from './messages';

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

const Actions = {moveDown, moveLeft, moveRight, moveUp};

export {Actions};
