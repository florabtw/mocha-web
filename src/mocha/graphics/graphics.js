import {drawTiles} from './tiles';
import {drawEntity} from './entities';
import {naturalWidth} from './scale';

const draw = (canvas, state) => {
  const context = canvas.getContext('2d');
  context.imageSmoothingEnabled = false;

  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  if (!state.self.isRunning) return;

  const currentChunk = state.chunks[1];

  if (!currentChunk) return;

  const scalar = canvas.width / naturalWidth();
  const options = {scalar};

  drawTiles(context, currentChunk.tiles, options).then(() =>
    drawEntities(context, state.entities, options),
  );
};

const drawEntities = (context, entities, options) => {
  Object.values(entities).forEach(entity =>
    drawEntity(context, entity, options),
  );
};

const graphics = {draw};

export default graphics;
