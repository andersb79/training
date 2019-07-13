import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import VideoIcon from "@material-ui/icons/VideoCall";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext
} from "cloudinary-react";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
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
    backgroundColor: red[500]
  }
}));

export default function Game({ store }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function processFile(e, level) {
    var file = e.target.files[0];

    store.processFile(file, level, text => {
      handleExpandClick();
    });
  }

  return (
    <div className="game">
      {store.filteredLevels.map((level, i) => (
        <Card key={level.level} className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {level.level}
              </Avatar>
            }
            title={level.name}
            subheader={level.category}
          />

          <CardContent>
            <Video
              cloudName="deolievif"
              publicId={level.publicId}
              width="100%"
              height="200px"
              controls
            />
            <Typography variant="body2" color="textSecondary" component="p">
              {level.details}
            </Typography>
          </CardContent>          
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <div className="fileinputs">
                <input
                  type="file"
                  className="file"
                  onChange={e => processFile(e, level)}
                />
                <div className="fakefile">
                  <Button variant="outlined">
                    Ladda upp <VideoIcon />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}
