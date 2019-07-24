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
import Game from "./Game";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
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
        <List dense={dense}>
          {store.listCategories.map(cat => (
            <ListItem key={cat.id} onClick={() => goToDrill(cat)}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={cat.name}
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
      )}
      {store.selectedCategory && <Game store={store} />}
    </div>
  );
}

export default observer(Drills);
