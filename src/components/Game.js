import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import VideoIcon from "@material-ui/icons/VideoCall";
import VisibilitySensor from "react-visibility-sensor";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FilterListIcon from "@material-ui/icons/FilterList";
import VideoControl from "./VideoControl";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Drill from "./Drill";
import { observable } from "mobx";

const ITEM_HEIGHT = 48;
const useStyles = makeStyles(theme => ({
  card: {
    //maxWidth: 345,
    marginTop: "10px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    // backgroundColor: red[500]
  }
}));

function Game({ store }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      store.levels
        .filter(x => x.isVisible)
        .map(level => {
          onChange(level, true);
        });
    }, 1);
  });

  function processFile(e) {
    var file = e.target.files[0];

    store.processFile(file, text => {
      alert("Uppladdning klar");
    });
  }

  function onChange(level, isVisible) {
    level.setVisibility(isVisible);
    const videoElm = document.getElementById(level.id);
    if (videoElm) {
      if (isVisible) {
        videoElm.play();
      } else {
        videoElm.pause();
      }
    } else {
      console.log("not found");
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function getAvatarColor(level) {
    if (level.category === "MEDIUM") {
      return { backgroundColor: "orange" };
    }

    if (level.category === "HARD") {
      return { backgroundColor: "red" };
    }

    return { backgroundColor: "green" };
  }

  function goToDrill(level) {
    store.selectDrill(level);
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
          {store.filteredLevels.map((level, i) => (
            <VisibilitySensor
              key={level.id}
              onChange={isVisible => onChange(level, isVisible)}
            >
              <Card
                key={level.level}
                className={classes.card}
                onClick={() => goToDrill(level)}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label="Recipe"
                      style={getAvatarColor(level)}
                      className={classes.avatar}
                    >
                      {level.displayIdentifier}
                    </Avatar>
                  }
                  title={level.name}
                />

                <CardContent>
                  <VideoControl store={store} settings={level} />
                  <div className="card-content">
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {level.details}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </VisibilitySensor>
          ))}
        </div>
      )}

      {store.selectedDrill && <Drill store={store} />}
    </div>
  );
}

export default observer(Game);
