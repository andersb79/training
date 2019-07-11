import React, { useState } from "react";
import "./App.css";
import Number from "./components/Number";
import Game from "./components/Game";
import Feed from "./components/Feed";
import Login from "./components/Login";
import LevelStore from "./models/LevelStore";
import data from "./models/data.json";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";

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
  const [tabIndex, setTabIndex] = React.useState(0);

  function handleChange(event, newValue) {
    setTabIndex(newValue);
  }

  const store = LevelStore.create(data);

  console.log("levels", store.levels.toJSON());

  const number =
    menuSelected === "Number" ? <Number visible={true} store={store} /> : null;
  const game = menuSelected === "Game" ? <Game store={store} /> : null;
  const feed = menuSelected === "Feed" ? <Feed store={store} /> : null;

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
              <AppBar position="static" color="default">
                <Tabs
                  value={tabIndex}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="on"
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab label="Item One" icon={<PhoneIcon />} />
                  <Tab label="Item Two" icon={<FavoriteIcon />} />
                </Tabs>
              </AppBar>
              {tabIndex === 0 && (
                <TabContainer>
                  {number}
                  {login}
                  <Game store={store} />
                </TabContainer>
              )}
              {tabIndex === 1 && (
                <TabContainer>
                  <Feed store={store} />
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
