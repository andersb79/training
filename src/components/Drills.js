import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Game2 from "./Game2";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "10px"
  },
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  media: {
    height: 210,
    paddingTop: "56.25%"
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  },
  text: {
    margin: "10px"
  }
}));

function Drills({ store }) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  function goToDrill(cat) {
    store.selectCategory(cat);
  }

  return (
    <div className="drills">
      {!store.selectedCategory && (
        <div>
          {store.listCategories.map((cat, i) => (
            <Card
              key={i}
              className={classes.card}
              onClick={() => goToDrill(cat)}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={cat.image}
                  title={cat.name}
                />
                <CardContent>
                  <Typography
                    className={classes.text}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {cat.name}
                  </Typography>
                  <Typography
                    className={classes.text}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>

        // <List dense={dense}>
        //   {store.listCategories.map(cat => (
        //     <ListItem key={cat.id} onClick={() => goToDrill(cat)}>
        //       <ListItemAvatar>
        //         <Avatar>
        //           <img className="login-img" src="0.jpg" alt="Träningar" />
        //         </Avatar>
        //       </ListItemAvatar>
        //       <ListItemText
        //         primary={cat.name}
        //         secondary={secondary ? "Secondary text" : null}
        //       />
        //       <ListItemSecondaryAction>
        //         <IconButton edge="end" aria-label="Delete">
        //           <KeyboardArrowRightIcon />
        //         </IconButton>
        //       </ListItemSecondaryAction>
        //     </ListItem>
        //   ))}
        // </List>
      )}
      {store.selectedCategory && <Game2 store={store} />}
    </div>
  );
}

export default observer(Drills);
