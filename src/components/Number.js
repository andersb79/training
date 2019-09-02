import React, { Component } from "react";
import { observer } from "mobx-react";

class Number extends Component {
  generateRandomNumber = (min, max) => {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
  };
  generateColor = () => {
    const min = 0;
    const max = this.props.colorCount * 10;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    if (random <= 10) {
      return "yellow";
    }

    if (random <= 20) {
      return "red";
    }

    if (random <= 30) {
      return "blue";
    }

    if (random <= 40) {
      return "white";
    }
  };

  state = {
    number: this.generateRandomNumber(0, 9),
    color: this.generateColor(),
    delay: 3000
  };
  componentDidMount() {
    this.interval = setInterval(this.tick, this.state.delay);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.delay !== this.state.delay) {
      clearInterval(this.interval);
      this.interval = setInterval(this.tick, this.state.delay);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({
      number: this.generateRandomNumber(0, 9),
      color: this.generateColor()
    });
  };

  render() {
    const color = this.props.colorCount
      ? { color: "black" }
      : { color: "yellow" };
    return (
      <div
        style={{ backgroundColor: this.state.color }}
        className="number"
        onClick={() => this.props.store.setRunningApp("MAIN")}
      >
        <div className="inner-number" style={color}>
          {this.state.number}
        </div>
      </div>
    );
  }
}

export default observer(Number);
