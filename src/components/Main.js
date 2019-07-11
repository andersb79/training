import React, { useState } from "react";
import Game from "./Game";
import ItemList from "./ItemList";
import Login from "./Login";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import StarIcon from "@material-ui/icons/Star";
import UserIcon from "@material-ui/icons/SupervisedUserCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
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

export default function Main({ store }) {
  const [menuSelected, setMenuSelected] = useState("Login");
  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState(1);

  function handleChange(event, newValue) {
    setTabIndex(newValue);
  }

  const login =
    menuSelected === "Login" ? (
      <Login store={store} onLogin={setMenuSelected} />
    ) : null;
  return (
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
          <Tab label={store.loggedIn.userName} icon={<UserIcon />} />
        </Tabs>
      </AppBar>
      {tabIndex === 0 && (
        <TabContainer>
          <ItemList store={store} />
        </TabContainer>
      )}
      {tabIndex === 1 && (
        <TabContainer>
          <Game store={store} />
        </TabContainer>
      )}
      {tabIndex === 2 && (
        <TabContainer>
          <div className="profile">{store.loggedIn.name}</div>
        </TabContainer>
      )}
    </div>
  );
}
