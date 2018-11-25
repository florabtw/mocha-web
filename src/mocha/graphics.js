import {TileTypes} from './handlers';

const draw = (canvas, state) => {
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const currentChunk = state.chunks[1];

  if (currentChunk) drawMap(ctx, currentChunk.tiles);
};

const drawMap = (context, rows) => {
  rows.forEach((row, rowIndex) => {
    row.forEach((tile, columnIndex) => {
      drawTile(context, tile, rowIndex, columnIndex);
    });
  });
};

const colorMap = {
  [TileTypes.GRASS]: 'green',
  [TileTypes.DIRT]: 'brown',
  [TileTypes.STONE]: 'lightgrey',
  [TileTypes.WATER]: 'blue',
};

const drawTile = (context, tile, row, column) => {
  const color = colorMap[tile];

  context.fillStyle = color;

  const startX = column * 32;
  const endX = column * 32 + 32;

  const startY = row * 32;
  const endY =  row * 32 + 32;

  context.fillRect(startX, startY, endX, endY);
};

const graphics = {draw};

export default graphics;
