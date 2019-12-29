import React from "react";
import { observer } from "mobx-react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function PlayerProfile({ store, onBack }) {
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
