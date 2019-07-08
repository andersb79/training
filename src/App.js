import React, { useState } from "react";
import "./App.css";
import Number from "./components/Number";
import Game from "./components/Game";
import { slide as Menu } from "react-burger-menu";
import LevelStore from "./models/LevelStore";
import data from "./models/data.json";

function App() {
  const [menuSelected, setMenuSelected] = useState("Game");

  const store = LevelStore.create(data);

  console.log("levels", store.levels.toJSON());

  const number =
    menuSelected === "Number" ? <Number visible={true} store={store} /> : null;
  const game = menuSelected === "Game" ? <Game store={store} /> : null;

  return (
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <a
          id="number"
          className="menu-item"
          onClick={() => setMenuSelected("Number")}
        >
          Number
        </a>
        <a
          id="game"
          className="menu-item"
          onClick={() => setMenuSelected("Game")}
        >
          Game
        </a>
      </Menu>
      <main id="page-wrap">
        <div className="App">
          <header className="App-header">
            {number}

            {game}
          </header>
        </div>
      </main>
    </div>
  );
}

export default App;
