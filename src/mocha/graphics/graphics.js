import {drawTiles} from './tiles';
import {drawEntity} from './entities';

const draw = (canvas, state) => {
  const context = canvas.getContext('2d');
  context.imageSmoothingEnabled = false;

  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  if (!state.self.isRunning) return;

  const currentChunk = state.chunks[1];

  if (!currentChunk) return;

  drawTiles(context, currentChunk.tiles).then(() =>
    drawEntities(context, state.entities),
  );
};

const drawEntities = (context, entities) => {
  Object.values(entities).forEach(entity => drawEntity(context, entity));
};

const graphics = {draw};

export default graphics;
