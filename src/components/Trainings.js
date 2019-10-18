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
  const [menu, setMenu] = React.useState(0);

  function Roll({ classes, store }) {
    return <div>roll</div>;
  }

  return (
    <div className={classes.root}>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => store.setPrevTraining()}
        >
          -
        </Button>
        {store.currentTraining.date} {store.currentTraining.trainingId} - {menu}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => store.setNextTraining()}
        >
          +
        </Button>
      </div>
      <ButtonGroup>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setMenu(0)}
        >
          Närvaro
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setMenu(1)}
        >
          Dagens indelning
        </Button>
      </ButtonGroup>
      {menu === 0 && <Presence classes={classes} store={store} />}
      {menu === 1 && <Division classes={classes} store={store} />}
    </div>
  );
}

export default observer(Trainings);
