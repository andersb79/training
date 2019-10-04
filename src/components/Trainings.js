import React from "react";
import { observer } from "mobx-react";
import TabletIcon from "@material-ui/icons/Tablet";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function Trainings({ store }) {
  return (
    <Paper className="help">
      <Typography variant="h6" paragraph>
        <div>{store.currentTraining.description}</div>
        {store.players.map(player => (
          <div>
            <input type="checkbox" />
            {player.name}
          </div>
        ))}
      </Typography>
    </Paper>
  );
}

export default observer(Trainings);
