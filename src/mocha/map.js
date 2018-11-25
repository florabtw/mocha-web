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

export { parseMap, TileTypes };
