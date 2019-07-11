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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext
} from "cloudinary-react";

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
  const [expanded, setExpanded] = React.useState(false);

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
    <div>
      {store.feeds.map((level, i) => (
        <Card key={level.level} className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {level.level}
              </Avatar>
            }
            action={
              <IconButton aria-label="Settings">
                <MoreVertIcon />
              </IconButton>
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
            {/* <div
              className="video"
              style={{
                position: "relative",
                paddingBottom: "56.25%" ,
                paddingTop: 25,
                height: 0
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                src={level.link}
                frameBorder="0"
              />
            </div> */}
            <Typography variant="body2" color="textSecondary" component="p">
              {level.details}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="Add to favorites">
              <StarIcon color="secondary" />
              <StarIcon color="disabled" />
              <StarIcon color="disabled" />
              <StarIcon color="disabled" />
              <StarIcon color="disabled" />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <div>
                <input type="file" onChange={e => processFile(e, level)} />
              </div>
              <Typography paragraph>Gör så här</Typography>
              <Typography paragraph>och så här</Typography>
              <Typography paragraph>och så här</Typography>
              <Typography>tada</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}
