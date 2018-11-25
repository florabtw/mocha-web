import client from './client';
import engine from './engine';
import graphics from './graphics';

import {Actions} from './actions';
import {MessageTypes, Messages} from './messages';

const play = canvas => {
  return new Promise(resolve => {
    let connection = {};
    let state = engine.create();

    const stop = () => {
      connection.close();

      state = engine.stop();
      graphics.draw(canvas, state);
    };

    const onConnection = conn => {
      connection = conn;

      connection.onMessage = onMessage;

      resolve({stop});
    };

    let waitingForAssignment = false;

    const onMessage = message => {
      state = engine.apply(state, message);

      if (message.type === MessageTypes.LOGIN_SUCCESS) {
        connection.send(Actions.requestEntitiesByPlayerId(state))
        waitingForAssignment = true;
      }

      if (waitingForAssignment && message.type === MessageTypes.ENTITY_UPDATE) {
        const assign = Messages.AssignEntity(message.id);
        state = engine.apply(state, assign);
        waitingForAssignment = false;
      }

      graphics.draw(canvas, state);
    };

    canvas.addEventListener('keydown', event => {
      const act = Actors[event.key];
      const message = act(state);

      connection.send(message);
    });

    client.connect().then(onConnection);
  });
};

const Actors = {
  a: Actions.moveLeft,
  d: Actions.moveRight,
  s: Actions.moveDown,
  w: Actions.moveUp,
};

export {play};
