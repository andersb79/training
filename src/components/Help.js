import React from "react";
import { observer } from "mobx-react";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import VideoIcon from "@material-ui/icons/VideoCall";
import PersonIcon from "@material-ui/icons/Person";
import TabletIcon from "@material-ui/icons/Tablet";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

function Help({ store }) {
  function update() {
    document.location.reload();
  }

  function startColor(count) {
    store.setColorCount(count);
    store.setRunningApp("COLOR");
  }

  return (
    <Paper className="help">
      <Typography variant="h6" paragraph>
        <TabletIcon /> Verktyg
      </Typography>

      <Button variant="outlined" onClick={() => store.setRunningApp("NUMBER")}>
        Nummer
      </Button>

      <Button variant="outlined" onClick={() => startColor(2)}>
        Color 2 färger
      </Button>

      <Button variant="outlined" onClick={() => startColor(4)}>
        Color 4 färger
      </Button>

      <Typography paragraph>
        Om det finns nya uppdateringar kan du uppdatera här.
      </Typography>

      <Button variant="outlined" onClick={update}>
        Uppdatera appen
      </Button>
    </Paper>
  );
}

export default observer(Help);
