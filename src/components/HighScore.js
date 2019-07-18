import React from "react";
import { observer } from "mobx-react";
import { Image } from "cloudinary-react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#f5f5f5"
  }
}));

function HighScore({ store }) {
  const classes = useStyles();
  return (
    <>
      <div className="profile">Topplista</div>
      <div className="highscore">
        <List className={classes.root}>
          {store.users.map(user => (
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Image
                      cloudName="deolievif"
                      publicId={user.profileImage}
                      width="100%"
                      height="100%"
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.name} secondary={user.highscore} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </div>
    </>
  );
}

export default observer(HighScore);
