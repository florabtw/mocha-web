import {drawTile} from './tiles';
import {drawEntity} from './entities';

const draw = (canvas, state) => {
  const context = canvas.getContext('2d');
  context.imageSmoothingEnabled = false;

  const currentChunk = state.chunks[1];
  if (currentChunk) drawMap(context, currentChunk.tiles);

  drawEntities(context, state.entities);
};

const drawMap = (context, rows) => {
  rows.forEach((row, rowIndex) => drawRow(context, row, rowIndex));
};

const drawRow = (context, row, rowIndex) => {
  row.forEach((tile, columnIndex) =>
    drawTile(context, tile, rowIndex, columnIndex),
  );
};

const drawEntities = (context, entities) => {
  Object.values(entities).forEach(entity => drawEntity(context, entity));
};

const graphics = {draw};

export default graphics;
