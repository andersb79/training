import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Login from "./components/Login";
import LevelStore from "./models/LevelStore";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react-lite";
import Api from "./Api/TrainingApi";

const store = LevelStore.create();
store.init(Api, window.localStorage.getItem("loggedIn"));

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

function App() {
  const [menuSelected, setMenuSelected] = useState("Login");

  useEffect(() => {
    store.setHeight(window.innerHeight);
  }, []);

  function onLogout() {
    store.logout();
    setMenuSelected("Login");
  }

  if (!store.initzialize) {
    return (
      <div style={{ marginTop: "100px", textAlign: "center" }}>LADDAR...</div>
    );
  }

  if (store.initzialize && store.loggedIn) {
    return <Main store={store} onLogout={onLogout} />;
  }

  const login =
    menuSelected === "Login" ? (
      <Login store={store} onLogin={setMenuSelected} />
    ) : (
      <Main store={store} />
    );

  return (
    <div id="outer-container">
      <main id="page-wrap">
        <div className="App">
          <header className="App-header">{login}</header>
        </div>
      </main>
    </div>
  );
}

export default observer(App);
