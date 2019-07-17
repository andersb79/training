import React, { useState } from "react";
import Game from "./Game";
import ItemList from "./ItemList";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import StarIcon from "@material-ui/icons/Star";
import UserIcon from "@material-ui/icons/SupervisedUserCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import { Image } from "cloudinary-react";
import { observer } from "mobx-react-lite";
import Profile from "./Profile";

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
    backgroundColor: "#f5f5f5"
  }
}));

function Main({ store, onLogout }) {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState(0);

  function handleChange(event, newValue) {
    setTabIndex(newValue);
  }  

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
          <Tab label="Topplista" icon={<StarIcon />} />
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
          <div className="profile">Topplista</div>
          <div className="highscore">
            <List className={classes.root}>
              {store.users.map(user => (
                <>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <Image
                          cloudName="deolievif"
                          publicId={user.profileImage}
                          width="100%"
                          height="100%"
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.name}
                      secondary={user.highscore}
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              ))}
            </List>
          </div>
        </TabContainer>
      )}
      {tabIndex === 3 && (
        <TabContainer>
         <Profile store={store} onLogout={onLogout} />
        </TabContainer>
      )}
    </div>
  );
}

export default observer(Main);
