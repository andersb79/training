import React, { useState } from "react";
import "./App.css";
import Number from "./components/Number";
import Game from "./components/Game";
import Login from "./components/Login";
import { slide as Menu } from "react-burger-menu";
import LevelStore from "./models/LevelStore";
import data from "./models/data.json";

function App() {
  const [menuSelected, setMenuSelected] = useState("Login");

  const store = LevelStore.create(data);

  console.log("levels", store.levels.toJSON());

  const number =
    menuSelected === "Number" ? <Number visible={true} store={store} /> : null;
  const game = menuSelected === "Game" ? <Game store={store} /> : null;

  const login = menuSelected === "Login" ? <Login store={store} onLogin={setMenuSelected}/> : null;

  return (
    <div id="outer-container">      
      <main id="page-wrap">
        <div className="App">
          <header className="App-header">
            {number}
            {login}
            {game}
          </header>
        </div>
      </main>
    </div>
  );
}

export default App;
