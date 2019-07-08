import React, { Component } from "react";

class Game extends Component {
  render() {
    return (
      <div className="game">
        {this.props.store.levels.map((level, i) => (
          <div className="tile" key={i}>
            <div className="level-text">Level {level.level}</div>
            <div className="name-text">{level.name}</div>
            <div className="detail-text">{level.details}</div>
            <div
              className="video"
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                src={level.link}
                frameBorder="0"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Game;
