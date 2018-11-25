import React, {Component} from 'react';
import { client, engine, graphics } from './mocha';

class App extends Component {
  constructor() {
    super();

    this.gameState = engine.create();
  }

  componentDidMount() {
    client.connect().then(this.onConnection);
  }

  onConnection = connection => {
    this.connection = connection;

    connection.onMessage = message => {
      this.gameState = engine.apply(this.gameState, message);
      console.log(message.type);
      console.log(this.gameState);
      // graphics.draw(this.canvas, this.gameState);
    };
  };

  onDisconnectClicked = () => {
    this.connection.close();
  };

  onCanvasRef = ref => {
    this.canvas = ref;
  };

  render() {
    return (
      <div>
        <button onClick={this.onDisconnectClicked}>Disconnect</button>
        <canvas ref={this.onCanvasRef} />
      </div>
    );
  }
}

export default App;
