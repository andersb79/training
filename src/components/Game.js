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
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditDrill from "./EditDrill";
import { observable } from "mobx";
import Chip from "@material-ui/core/Chip";
import { Image } from "cloudinary-react";

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
    if (level.videoId) {
      return;
    }
    level.setVisibility(isVisible);
    const videoElm = document.getElementById(level.id);
    if (videoElm) {
      if (videoElm.play) {
        if (isVisible) {
          videoElm.play();
        } else {
          videoElm.pause();
        }
      }
    } else {
      console.log("not found");
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [newDrill, setNewDrill] = React.useState(false);

  function getAvatarColor(level) {
    if (level.category === "MEDIUM") {
      return { backgroundColor: "orange" };
    }

    if (level.category === "HARD") {
      return { backgroundColor: "red" };
    }

    return { backgroundColor: "green" };
  }

  function addDrill() {
    setNewDrill(true);
  }

  return (
    <div className="game">
      {!newDrill && (
        <div>
          <div className="back">
            <div className="left">
              <ArrowBackIosIcon onClick={() => store.selectCategory()} />
            </div>
            <div className="right">
              {store.selectedCategory.name} ({store.filteredLevels.length} st)
            </div>
            <div className="action">
              <AddCircleIcon onClick={addDrill} />
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
                // onClick={() => goToDrill(level)}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label="Recipe"
                      style={getAvatarColor(level)}
                      className={classes.avatar}
                    ></Avatar>
                  }
                  title={level.name}
                />

                <CardContent>
                  {level.fileType === "mp4" && (
                    <VideoControl store={store} settings={level} />
                  )}
                  {(level.fileType === "jpg" || level.fileType === "gif") &&
                    level.hasSharedPath && <img src={level.src} />}

                  {(level.fileType === "jpg" || level.fileType === "gif") &&
                    !level.hasSharedPath && (
                      <Image
                        cloudName="deolievif"
                        publicId={level.publicId}
                        width="100%"
                        height="100%"
                      />
                    )}

                  <div className="card-content">
                    <Chip label={level.playerCount} />

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {level.details}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {level.description}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </VisibilitySensor>
          ))}
        </div>
      )}

      {newDrill && (
        <EditDrill store={store} onBack={() => setNewDrill(false)} />
      )}
    </div>
  );
}

export default observer(Game);
