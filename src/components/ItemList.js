import React from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
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

function ItemList({ store }) {
  const classes = useStyles();

  return (
    <div>
      {store.items.map((item, i) => (
        <Card className={classes.card}>
          <CardHeader title={item.userName} subheader={item.userName} />
          <CardContent>
            <Video
              cloudName="deolievif"
              publicId={item.publicId}
              width="100%"
              height="200px"
              controls
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default observer(ItemList);
