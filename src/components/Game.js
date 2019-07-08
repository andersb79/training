import React, { Component } from "react";

class Game extends Component {
  render() {
       
    return <div>
    {this.props.store.levels.map((level, i) => (
      <div key={i}>
      {level.level} - {level.name} - {level.details}
      </div>
    ))}


    </div>;
  }
}

export default Game;
