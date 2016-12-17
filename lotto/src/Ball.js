import React, { Component } from 'react';

class Ball extends Component {
  render() {
    return (
      <div className="ball">
        {this.props.n}
      </div>
    );
  }
}

export default Ball;
