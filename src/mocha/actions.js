import {Messages} from './messages';

const requestEntitiesByPlayerId = state => {
  return Messages.RequestEntitiesByPlayerId(state.self.id);
};

const moveDown = state => {
  const entityId = state.self.entities[0];
  const entity = state.entities[entityId];

  const x = entity.x;
  const y = entity.y;

  return Messages.Move(entityId, x, y, 'SOUTH', 0, 0);
};

const moveLeft = state => {
  const entityId = state.self.entities[0];
  const entity = state.entities[entityId];

  const x = entity.x;
  const y = entity.y;

  return Messages.Move(entityId, x, y, 'WEST', 0, 0);
};

const moveRight = state => {
  const entityId = state.self.entities[0];
  const entity = state.entities[entityId];

  const x = entity.x;
  const y = entity.y;

  return Messages.Move(entityId, x, y, 'EAST', 0, 0);
};

const moveUp = state => {
  const entityId = state.self.entities[0];
  const entity = state.entities[entityId];

  const x = entity.x;
  const y = entity.y;

  return Messages.Move(entityId, x, y, 'NORTH', 0, 0);
};

const Actions = {
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  requestEntitiesByPlayerId,
};

export {Actions};
