const TileTypes = {
  GRASS: Symbol('grass'),
  DIRT: Symbol('dirt'),
  STONE: Symbol('stone'),
  WATER: Symbol('water'),
};

const symbolMap = {
  '.': TileTypes.DIRT,
  _: TileTypes.GRASS,
  '#': TileTypes.STONE,
  '~': TileTypes.WATER,
};

const parseMap = map => {
  const sideLength = Math.sqrt(map.length);

  return [...new Array(sideLength)].map((_, i) => {
    const slice = map.slice(i * sideLength, i * sideLength + sideLength);
    const row = slice.split('');

    return row.map(symbol => symbolMap[symbol]);
  });
};

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
  return {...state, self: {id: message.id}};
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

const Handlers = {
  chunkUpdate,
  entityUpdate,
  loginSuccess,
  itemUpdate,
  itemPrototypeUpdate,
};

export {Handlers, TileTypes};
