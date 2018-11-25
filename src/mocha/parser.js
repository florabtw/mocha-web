import {Messages} from './messages';

const blobToText = blob => {
  return new Promise(resolve => {
    const reader = new FileReader();

    reader.onload = () => {
      const line = reader.result;
      const text = line.slice(0, -1);
      resolve(text);
    };

    reader.readAsText(blob);
  });
};

const messageMap = {
  CHUNK: Messages.Chunk,
  ENTITY_UPDATE: Messages.EntityUpdate,
  ITEM_PROTOTYPE_UPDATE: Messages.ItemPrototypeUpdate,
  ITEM_UPDATE: Messages.ItemUpdate,
  LOGIN_SUCCESS: Messages.LoginSuccess
};

const parse = async frame => {
  const text = await blobToText(frame.data);

  const [prefix, ...rest] = text.split(' ');

  return messageMap[prefix](...rest);
};

export { parse };
