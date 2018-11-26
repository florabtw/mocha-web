import {neighbors} from '../map';
import {tileFromBitmap} from './sprites';

const drawTiles = (context, tiles) => {
  return Promise.all(
    tiles.map((_, rowIndex) => drawRow(context, tiles, rowIndex)),
  );
};

const drawRow = async (context, tiles, rowIndex) => {
  const row = tiles[rowIndex];

  return Promise.all(
    row.map((_, columnIndex) =>
      drawTile(context, tiles, rowIndex, columnIndex),
    ),
  );
};

const drawTile = (context, tiles, row, column) => {
  const neighborLocations = neighbors(row, column);
  const neighborTiles = neighborLocations.map(([x, y]) => tiles[x][y]);

  const tile = tiles[row][column];

  const neighborBits = neighborTiles.map(target => (target === tile ? 1 : 0));

  const startX = column * 32;
  const startY = row * 32;

  return tileFromBitmap(tile, neighborBits).then(image =>
    context.drawImage(image, startX, startY),
  );
};

export {drawTiles};
