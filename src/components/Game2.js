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

import clsx from "clsx";

import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles(theme => ({
  card: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10
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

function Game2({ store }) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
              <Card className={classes.card} key={level.id}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={level.name}
                  subheader="September 14, 2016"
                />

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
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {level.details}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep
                      skillet over medium-high heat. Add chicken, shrimp and
                      chorizo, and cook, stirring occasionally until lightly
                      browned, 6 to 8 minutes. Transfer shrimp to a large plate
                      and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and
                      pepper, and cook, stirring often until thickened and
                      fragrant, about 10 minutes. Add saffron broth and
                      remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with
                      artichokes and peppers, and cook without stirring, until
                      most of the liquid is absorbed, 15 to 18 minutes. Reduce
                      heat to medium-low, add reserved shrimp and mussels,
                      tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just
                      tender, 5 to 7 minutes more. (Discard any mussels that
                      don’t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>

              // <ListItem key={level.id} onClick={() => selectDrill(level)}>
              //   <ListItemAvatar>
              //     <Avatar>
              //       <img className="login-img" src="0.jpg" alt="Träningar" />
              //     </Avatar>
              //   </ListItemAvatar>
              //   <ListItemText
              //     primary={level.name}
              //     secondary={secondary ? "Secondary text" : null}
              //   />
              //   <ListItemSecondaryAction>
              //     <IconButton edge="end" aria-label="Delete">
              //       <KeyboardArrowRightIcon />
              //     </IconButton>
              //   </ListItemSecondaryAction>
              // </ListItem>
            ))}
          </List>
        </div>
      )}
      {store.selectedDrill && <ViewDrill store={store} />}
    </div>
  );
}

export default observer(Game2);
