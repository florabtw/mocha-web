import {neighbors} from '../map';
import {tileFromBitmap} from './sprites';
import {scale, unit} from './scale';

const drawTiles = (context, tiles, options) => {
  return Promise.all(
    tiles.map((_, rowIndex) => drawRow(context, tiles, rowIndex, options)),
  );
};

const drawRow = async (context, tiles, rowIndex, options) => {
  const row = tiles[rowIndex];

  return Promise.all(
    row.map((_, columnIndex) =>
      drawTile(context, tiles, rowIndex, columnIndex, options),
    ),
  );
};

const drawTile = (context, tiles, row, column, {scalar}) => {
  const neighborLocations = neighbors(row, column);
  const neighborTiles = neighborLocations.map(([x, y]) => tiles[x][y]);

  const tile = tiles[row][column];

  const neighborBits = neighborTiles.map(target => (target === tile ? 1 : 0));

  const startX = column * scale(unit(), scalar);
  const startY = row * scale(unit(), scalar);

  return tileFromBitmap(tile, neighborBits, {scalar}).then(image =>
    context.drawImage(image, startX, startY),
  );
};

export {drawTiles};
