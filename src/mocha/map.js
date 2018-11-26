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

const neighborMap = {
  west: (row, column) => [row, Math.max(0, column - 1)],
  south: (row, column) => [Math.min(15, row + 1), column],
  east: (row, column) => [row, Math.min(15, column + 1)],
  north: (row, column) => [Math.max(0, row - 1), column],
};

const neighbors = (row, column) => [
  neighborMap.west(row, column),
  neighborMap.south(row, column),
  neighborMap.east(row, column),
  neighborMap.north(row, column),
];

export {neighbors, parseMap, TileTypes};
