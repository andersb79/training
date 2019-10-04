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
import PlayerProfile from "./PlayerProfile";
import Divider from "@material-ui/core/Divider";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "60px"
  },
  paper: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

function Players({ store }) {
  const classes = useStyles();

  function goToPlayer(player) {
    store.selectPlayer(player);
  }

  return (
    <div className={classes.root}>
      <ButtonGroup>
        {store.ratings.map(rating => (
          <Button
            key={rating.id}
            variant="contained"
            color="secondary"
            onClick={() => rating.toggleSelect()}
          >
            {rating.name} - {rating.selected ? "x" : ""}
          </Button>
        ))}
      </ButtonGroup>
      <div>-</div>
      {!store.selectedPlayer && (
        <List className={classes.paper}>
          {store.filteredPlayers.map(player => (
            <>
              <ListItem key={player.id} onClick={() => goToPlayer(player)}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={player.player}
                  secondary={player.ratingText}
                />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      )}
      {store.selectedPlayer && (
        <PlayerProfile store={store} onBack={() => goToPlayer(false)} />
      )}
    </div>
  );
}

export default observer(Players);
