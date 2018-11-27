import {TileTypes} from '../map';
import {scale, unit} from './scale';

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

const TileMap = {
  [TileTypes.DIRT]: dirtImage,
  [TileTypes.GRASS]: grassImage,
  [TileTypes.STONE]: stoneImage,
  [TileTypes.WATER]: waterImage,
};

const ImageCache = {
  [TileTypes.DIRT]: {},
  [TileTypes.GRASS]: {},
  [TileTypes.STONE]: {},
  [TileTypes.WATER]: {},
};

const tileFromBitmap = (type, [eight, four, two, one], {scalar}) => {
  let spriteIndex = eight * 8 + four * 4 + two * 2 + one * 1;

  if (type === TileTypes.DIRT) spriteIndex = 0;

  const cached = ImageCache[type][spriteIndex];

  if (cached) return cached;

  const row = spriteIndex % 4;
  const column = Math.floor(spriteIndex / 4);

  const [startX, startY] = [row, column].map(i => scale(unit(), i));

  const image = createImageBitmap(
    TileMap[type],
    startX,
    startY,
    unit(),
    unit(),
    {
      resizeHeight: scale(unit(), scalar),
      resizeWidth: scale(unit(), scalar),
      resizeQuality: 'pixelated',
    },
  );

  ImageCache[type][spriteIndex] = image;

  return image;
};

export {tileFromBitmap, TileMap};
