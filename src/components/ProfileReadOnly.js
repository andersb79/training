import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Image, Video } from "cloudinary-react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";
import ImageIcon from "@material-ui/icons/Image";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

function ProfileReadOnly({ store }) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    id: store.selectedProfile.id,
    name: store.selectedProfile.name,
    userName: store.selectedProfile.userName,
    password: store.selectedProfile.password,
    profileImage: store.selectedProfile.profileImage,
    favoriteTeam: store.selectedProfile.favoriteTeam,
    playerTeam: store.selectedProfile.playerTeam,
    position: store.selectedProfile.position,
    shirtNumber: store.selectedProfile.shirtNumber
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className="profileReadOnly">
      <div>
        <div className="left">
          <ArrowBackIosIcon onClick={() => store.selectProfile()} />
        </div>
        <div className="right">
          {store.selectedProfile.name}
        </div>
      </div>

      <form className={classes.container} noValidate autoComplete="off">
        <Image
          cloudName="deolievif"
          publicId={store.loggedIn.profileImage}
          width="100%"
          height="100%"
        />
        <TextField
          disabled
          id="standard-name"
          label="Namn"
          className={classes.textField}
          value={values.name}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Favoritlag"
          className={classes.textField}
          value={values.favoriteTeam}
          disabled
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Lag"
          className={classes.textField}
          value={values.playerTeam}
          disabled
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Position"
          className={classes.textField}
          value={values.position}
          disabled
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Tröjnummer"
          className={classes.textField}
          value={values.shirtNumber}
          disabled
          margin="normal"
        />
      </form>
    </div>
  );
}

export default observer(ProfileReadOnly);
