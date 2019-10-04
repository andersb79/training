import React from "react";
import { observer } from "mobx-react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import VideoIcon from "@material-ui/icons/VideoCall";
import VisibilitySensor from "react-visibility-sensor";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FilterListIcon from "@material-ui/icons/FilterList";
import VideoControl from "./VideoControl";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditDrill from "./EditDrill";
import { observable } from "mobx";
import Chip from "@material-ui/core/Chip";
import { Image } from "cloudinary-react";
import ViewDrill from "./ViewDrill";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function Game2({ store }) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  function selectDrill(lev) {
    store.selectDrill(lev);
  }
  return (
    <div className="game">
      {!store.selectedDrill && (
        <div>
          <div className="back">
            <div className="left">
              <ArrowBackIosIcon onClick={() => store.selectCategory()} />
            </div>
            <div className="right">
              {store.selectedCategory.name} ({store.filteredLevels.length} st)
            </div>
          </div>
          <List dense={dense}>
            {store.filteredLevels.map(level => (
              <ListItem key={level.id} onClick={() => selectDrill(level)}>
                <ListItemAvatar>
                  <Avatar>
                    <img className="login-img" src="0.jpg" alt="Träningar" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={level.name}
                  secondary={secondary ? "Secondary text" : null}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="Delete">
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      )}
      {store.selectedDrill && <ViewDrill store={store} />}
    </div>
  );
}

export default observer(Game2);
