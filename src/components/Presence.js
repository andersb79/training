import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "60px"
  },
  paper: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

function Presence({ store }) {
  const classes = useStyles();
  const hasStat = store.hasStats;

  if (!hasStat) {
    return (
      <Button
        variant="contained"
        color="secondary"
        onClick={() => store.startTraining()}
      >
        Starta närvaro
      </Button>
    );
  }

  return (
    <List className={classes.paper}>
      {store.players.map(player => (
        <>
          <ListItem onClick={() => player.toggleTraining()}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={player.player}
              secondary={player.myRatioText}
            />
            <ListItemSecondaryAction>
              {player.isTraining ? <VerifiedUserOutlinedIcon /> : ""}
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
}

export default observer(Presence);
