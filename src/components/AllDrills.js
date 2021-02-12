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
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AddDrill from "./AddDrill";
import ViewDrill2 from "./ViewDrill2";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "10px",
  },
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  media: {
    height: 210,
    paddingTop: "56.25%",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  text: {
    margin: "10px",
  },
}));

function AllDrills({ store }) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [showAddDrill, setShowAddDrill] = React.useState(false);
  const [name, setName] = React.useState("");
  const [drill, setDrill] = React.useState("");

  function goToDrill(cat) {
    store.selectCategory(cat);
  }

  const handleChange = (name) => (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const viewDrill = (d) => {
    setDrill();
    setTimeout(() => {
      setDrill(d);
    }, 100);
  };

  const save = () => {
    store.insertDrill(name);
  };

  return (
    <div className="drills">
      <Button onClick={() => setShowAddDrill(!showAddDrill)}>
        Lägg till övning
      </Button>

      {showAddDrill && (
        <div>
          <AddDrill store={store} />
        </div>
      )}

      {store.drills.map((d) => (
        <div onClick={() => viewDrill(d)}>{d.description}</div>
      ))}

      {drill && (
        <div>
          <ViewDrill2 store={store} drill={drill} />
        </div>
      )}
    </div>
  );
}

export default observer(AllDrills);
