import React, {Component} from 'react';
import {play} from './mocha/player';

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
        <canvas
          height="512"
          id="mocha"
          ref={this.onCanvasRef}
          tabIndex="1"
          width="512"
        />
        <button onClick={this.onDisconnectClicked}>Disconnect</button>
      </div>
    );
  }
}

export default App;
