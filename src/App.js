import React, {Component} from 'react';
import {play} from './mocha/player';

class App extends Component {
  constructor() {
    super();

    this.state = {size: 512};
  }

  onCanvasRef = ref => {
    play(ref).then(game => (this.game = game));
  };

  render() {
    const {size} = this.state;

    return (
      <div className="app">
        <canvas
          height={size}
          id="mocha"
          ref={this.onCanvasRef}
          tabIndex="1"
          width={size}
        />
      </div>
    );
  }
}

export default App;
