import {TileTypes} from '../map';

import dirtSrc from './sprites/dirt.png';
import grassSrc from './sprites/grass.png';
import stoneSrc from './sprites/stone.png';
import waterSrc from './sprites/water.png';

const dirtImage = new Image();
dirtImage.src = dirtSrc;

const grassImage = new Image();
grassImage.src = grassSrc;

const stoneImage = new Image();
stoneImage.src = stoneSrc;

const waterImage = new Image();
waterImage.src = waterSrc;

const imageMap = {
  [TileTypes.DIRT]: dirtImage,
  [TileTypes.GRASS]: grassImage,
  [TileTypes.STONE]: stoneImage,
  [TileTypes.WATER]: waterImage,
};

const drawTile = (context, tile, row, column) => {
  const startX = column * 32;
  const startY = row * 32;

  const image = imageMap[tile];

  context.drawImage(image, 0, 0, 16, 16, startX, startY, 32, 32);
};

export { drawTile };
