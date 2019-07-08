import React, { useState } from "react";
import "./App.css";
import Number from "./components/Number";
import Game from "./components/Game";
import { slide as Menu } from 'react-burger-menu'


function App() {

  const [menuSelected, setMenuSelected] = useState('Game');

  const number = menuSelected === 'Number' ? <Number visible={true} /> : null;
  const game = menuSelected === 'Game' ? <Game /> : null;
  const [count, setCount] = useState(0);
  

  return (
    <div id="outer-container">
  <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >  
        <a id="number" className="menu-item" onClick={() => setMenuSelected('Number')}>Number</a>
        <a id="game" className="menu-item" onClick={() => setMenuSelected('Game')}>Game</a>
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
