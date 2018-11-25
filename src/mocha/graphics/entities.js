import girlSrc from './sprites/girl.png';

const girlImage = new Image();
girlImage.src = girlSrc;

const drawEntity = (context, entity) => {
  const startX = entity.x;
  const startY = entity.y;

  context.drawImage(girlImage, 32, 0, 16, 16, startX, startY, 32, 32);
};

export { drawEntity };
