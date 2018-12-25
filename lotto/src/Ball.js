import React, { Component } from 'react';

class Ball extends Component {
  setColorBlue() {
    console.log('setColorBlue')
  }
  setColorRed() {
    console.log('setColorRed')
  }
  render() {
    if (this.props.isLast) {
      return (
        <div className="ball lastBall" >
          {this.props.n}
        </div>
      );
    } else {
      return (
        <div className="ball" >
          {this.props.n}
        </div>
      );

    }
  }
}

export default Ball;
