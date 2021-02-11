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
import Divider from "@material-ui/core/Divider";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Presence from "./Presence";
import Division from "./Division";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "60px",
  },
  paper: {
    width: "100%",
    margin: "10px",
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    margin: "10px",
  },
}));

function Episodes({ store }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!store.selectedEpisode && (
        <div>
          {store.episodes.map((episode, i) => (
            <div onClick={() => store.selectEpisode(episode)}>
              {episode.episodeNumber}
              {episode.episodeName}
            </div>
          ))}
        </div>
      )}
      {store.selectedEpisode && (
        <div>
          <Button onClick={() => store.selectEpisode()}>Back</Button>
          {store.selectedEpisode.episodeName}

          <div>
            {store.selectedEpisode.containers.map((container, i) => (
              <Card className={classes.card}>
                {container.containerName}
                {container.drillContainers.map((drill, i) => (
                  <div>Övning {drill.drillNumber}</div>
                ))}
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default observer(Episodes);
