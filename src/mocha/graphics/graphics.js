import {drawTile} from './tiles';

const draw = (canvas, state) => {
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const currentChunk = state.chunks[1];

  if (currentChunk) drawMap(ctx, currentChunk.tiles);
};

const drawMap = (context, rows) => {
  rows.forEach((row, rowIndex) => drawRow(context, row, rowIndex));
};

const drawRow = (context, row, rowIndex) => {
  row.forEach((tile, columnIndex) =>
    drawTile(context, tile, rowIndex, columnIndex),
  );
};

const graphics = {draw};

export default graphics;
