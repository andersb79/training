import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import TabletIcon from "@material-ui/icons/Tablet";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "60px"
  },
  paper: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

function Trainings({ store }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>{store.currentTraining.date}</div>
      <List className={classes.paper}>
        {store.players.map(player => (
          <ListItem onClick={() => player.toggleTraining()}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={player.player} secondary={player.type} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default observer(Trainings);
