import React, { Component } from 'react';
import './App.css';
import Ball from './Ball.js';


class App extends Component {
  constructor(props) {
    super();
    this.newBall = this.newBall.bind(this);
    this.newBoard = this.newBoard.bind(this);
    const numbers = [];
    for (let i = 1; i < 100; i++) { numbers.push(i); }
    this.state = { balls: [], availableNumbers: numbers, pickedNumbers: [] };
  }
  render() {
    const newBoard = this.state.balls.length === 0 ? 
    (<button className="midnight-blue-flat-button" onClick={this.newBoard}>
      Nueva tarjeta
    </button>) : null;
    return (
      <div className="App">
        <div id="ballpark">
          {this.state.balls}
        </div>
        <div id="bottom">
          <button className="midnight-blue-flat-button" onClick={this.newBall}>
            Nuevo Número
          </button>
          { newBoard}
        </div>
      </div>
    );
  }
  newBall() {
    const balls = [];
    this.state.pickedNumbers.forEach(n => { balls.push(<Ball n={n} key={n} isLast={n === this.state.lastBall}/>) });
    const pickedNumbers = this.state.pickedNumbers.slice();
    const availableNumbers = this.state.availableNumbers;
    if (availableNumbers.length === 0) { return; }
    const ri = Math.floor(Math.random() * availableNumbers.length);
    const n = availableNumbers.splice(ri, 1);
    pickedNumbers.unshift(n);
    balls.sort(function(a, b){ return a.props.n[0] - b.props.n[0]});
    balls.unshift( <Ball n={n} key={n} isLast={true}/>);
    this.setState({ balls: balls, pickedNumbers: pickedNumbers, availableNumbers: availableNumbers, lastBall: n })
  }
  newBoard() {
    for (let i=0; i < 16; i++) {
      setTimeout(() => {this.newBall()}, 200)
      ;
    }
    document.getElementsByClassName('lastBall')[0].style.display = 'none'
  }
}

export default App;
