import React, { Component } from 'react';
import './App.css';
import Ball from './Ball.js';





class App extends Component {
  constructor(props) {
    super();
    this.newBall = this.newBall.bind(this);
    const numbers = [];
    for (let i = 1; i < 100; i++) { numbers.push(i); }
    this.state = { balls: [], availableNumbers: numbers };
  }
  render() {
    return (
      <div className="App">
        <div id="ballpark">
          {this.state.balls}
        </div>
        <div id="bottom">
          <button className="midnight-blue-flat-button" onClick={this.newBall}>
            Tirer un numéro
          </button>
        </div>
      </div>
    );
  }
  newBall() {
    const balls = this.state.balls.slice();
    const availableNumbers = this.state.availableNumbers;
    if (availableNumbers.length === 0) { return; }
    const ri = Math.floor(Math.random() * availableNumbers.length);
    const n = availableNumbers.splice(ri, 1);
    balls.unshift(<Ball n={n} key={n}/>);
    balls.sort(function(a, b){ return a.props.n[0] - b.props.n[0]});
    this.setState({ balls: balls, availableNumbers: availableNumbers })
  }
}

export default App;
