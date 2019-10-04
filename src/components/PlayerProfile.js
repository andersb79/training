import React from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import { Image } from "cloudinary-react";
import ImageIcon from "@material-ui/icons/Image";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

function PlayerProfile({ store, onBack }) {
  const classes = useStyles();

  const player = store.selectedPlayer;

  function onUpdateRating(rating) {
    player.setRating(rating);
    store.updatePlayer(player);
  }

  return (
    <div className="profile">
      <div className="back">
        <div className="left">
          <ArrowBackIosIcon onClick={() => onBack()} />
        </div>
        <div className="right">{player.player}</div>
      </div>

      <div onClick={() => onUpdateRating("1")}>Nivå 1</div>
      <div onClick={() => onUpdateRating("2")}>Nivå 2</div>
      <div onClick={() => onUpdateRating("3")}>Nivå 3</div>
      <div onClick={() => onUpdateRating("4")}>Nivå 4</div>
    </div>
  );
}

export default observer(PlayerProfile);
