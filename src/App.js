import React, {Component} from 'react';
import {client, engine, graphics} from './mocha';

class App extends Component {
  onDisconnectClicked = () => {
    this.game.stop();
  };

  onCanvasRef = ref => {
    play(ref).then(game => (this.game = game));
  };

  render() {
    return (
      <div className="app">
        <canvas id="mocha" width="512" height="512" ref={this.onCanvasRef} />
        <button onClick={this.onDisconnectClicked}>Disconnect</button>
      </div>
    );
  }
}

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

      resolve({ stop });
    };

    const onMessage = message => {
      state = engine.apply(state, message);
      graphics.draw(canvas, state);
    };

    client.connect().then(onConnection);
  });
};

export default App;
