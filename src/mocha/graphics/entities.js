import {scale, unit} from './scale';

import girlSrc from './sprites/girl.png';

const girlImage = new Image();
girlImage.src = girlSrc;

const drawEntity = (context, entity, {scalar}) => {
  const startX = scale(entity.x, scalar / 2);
  const startY = scale(entity.y, scalar / 2);

  context.drawImage(
    girlImage,
    32,
    0,
    unit(),
    unit(),
    startX,
    startY,
    scale(unit(), scalar),
    scale(unit(), scalar),
  );
};

export {drawEntity};
