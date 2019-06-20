import React, { Component } from "react";

class Number extends Component {
  state = {
    randomNumber: 0
  };

  generateRandomNumber = (min, max) => {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({
      randomNumber: random
    });
  };

  render() {
    setTimeout(this.generateRandomNumber.bind(this, 1, 10), 3000);

    if (this.props.visible) {
      return <div className="number">{this.state.randomNumber}</div>;
    }

    return <div>trams</div>;
  }
}

export default Number;
