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

function Division({ store }) {
  const classes = useStyles();
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => store.updateLevelOnStat()}
      >
        Dela in
      </Button>
      {store.filteredPlayersInTrainingUn.length > 0 && (
        <span>okatogoriserade</span>
      )}
      <List className={classes.paper}>
        {store.filteredPlayersInTrainingUn.map(player => (
          <>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={player.player}
                secondary={player.failRate}
              />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
      Lätt {store.filteredPlayersInTrainingEasy.length}
      <List className={classes.paper}>
        {store.filteredPlayersInTrainingEasy.map(player => (
          <>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={player.player}
                secondary={player.currentStat.level}
              />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
      Svår {store.filteredPlayersInTrainingHard.length}
      <List className={classes.paper}>
        {store.filteredPlayersInTrainingHard.map(player => (
          <>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={player.player}
                secondary={player.currentStat.level}
              />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </>
  );
}

export default observer(Division);
