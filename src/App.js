import React, { useState } from "react";
import "./App.css";
import Number from "./components/Number";
import Game from "./components/Game";
import Main from "./components/Main";
import ItemList from "./components/ItemList";
import Login from "./components/Login";
import LevelStore from "./models/LevelStore";
import data from "./models/data.json";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import StarIcon from "@material-ui/icons/Star";
import UserIcon from "@material-ui/icons/SupervisedUserCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";

const store = LevelStore.create(data);

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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

function App() {
  const [menuSelected, setMenuSelected] = useState("Login");

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

export default App;
