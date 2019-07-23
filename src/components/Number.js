import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

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
    setTimeout(this.generateRandomNumber.bind(this, 0, 9), 3000);

    return (
      <div className="number">
        <div className="inner-number">{this.state.randomNumber}</div>
      </div>
    );
  }
}

export default observer(Number);
