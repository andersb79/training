import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

export default function Game({ store }) {
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

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(option) {
    store.setLevelFilter(option);
    setAnchorEl(null);
  }

  function goFullScreen(level) {
    document.getElementById(level.id).webkitEnterFullscreen();
  }

  function getAvatarColor(level) {
    if (level.category === "MEDIUM") {
      return { backgroundColor: "orange" };
    }

    if (level.category === "HARD") {
      return { backgroundColor: "red" };
    }

    return { backgroundColor: "green" };
  }

  return (
    <div className="game">
      <div>
        <div className="left">
          <ArrowBackIosIcon onClick={() => store.selectCategory()} />
        </div>
        <div className="right">{store.selectedCategory.name}</div>
      </div>
      <div className="card-content2">
        <div className="fileinputs">
          <input type="file" className="file" onChange={e => processFile(e)} />
          <div className="fakefile">
            <Button variant="outlined">
              Ladda upp <VideoIcon />
            </Button>
          </div>
        </div>
      </div>
      {store.filteredLevels.map((level, i) => (
        <VisibilitySensor
          key={level.id}
          onChange={isVisible => onChange(level, isVisible)}
        >
          <Card key={level.level} className={classes.card}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="Recipe"
                  style={getAvatarColor(level)}
                  className={classes.avatar}
                >
                  {level.level}
                </Avatar>
              }
              title={level.name}
              subheader={level.displayText}
            />

            <CardContent>
              <VideoControl store={store} settings={level} />
              <div className="card-content">
                <Typography variant="body2" color="textSecondary" component="p">
                  {level.details}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </VisibilitySensor>
      ))}
    </div>
  );
}
