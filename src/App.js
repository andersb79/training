import React, { useState } from "react";
import "./App.css";
import Number from "./components/Number";
import Game from "./components/Game";
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
  const [menuSelected, setMenuSelected] = useState("Feed");
  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState(1);

  function handleChange(event, newValue) {
    setTabIndex(newValue);
  }

  console.log("levels", store.levels.toJSON());

  const number =
    menuSelected === "Number" ? <Number visible={true} store={store} /> : null;
  const game = menuSelected === "Game" ? <Game store={store} /> : null;

  const login =
    menuSelected === "Login" ? (
      <Login store={store} onLogin={setMenuSelected} />
    ) : null;

  return (
    <div id="outer-container">
      <main id="page-wrap">
        <div className="App">
          <header className="App-header">
            <div className={classes.root}>
              <AppBar position="fixed" color="default">
                <Tabs
                  value={tabIndex}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="on"
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab label="Flöde" icon={<FavoriteIcon />} />
                  <Tab label="Utmaningar" icon={<StarIcon />} />
                </Tabs>
              </AppBar>
              {tabIndex === 0 && (
                <TabContainer>
                  {number}
                  {login}
                  <ItemList store={store} />
                </TabContainer>
              )}
              {tabIndex === 1 && (
                <TabContainer>
                  <Game store={store} />
                </TabContainer>
              )}
            </div>
          </header>
        </div>
      </main>
    </div>
  );
}

export default App;
