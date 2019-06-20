import React from "react";
import "./App.css";
import Number from "./components/Number";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Number visible={true} />
      </header>
    </div>
  );
}

export default App;
