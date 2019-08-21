import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import VideoControl from "./VideoControl";
import Typography from "@material-ui/core/Typography";

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

export default function Drill({ store }) {
  const classes = useStyles();

  const drill = store.selectedDrill;

  return (
    <div className="game">
      <div className="back">
        <div className="left">
          <ArrowBackIosIcon onClick={() => store.selectDrill()} />
        </div>
        <div className="right">övning</div>
      </div>
      <Card key={drill.level} className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {drill.displayIdentifier}
            </Avatar>
          }
          title={drill.name}
        />

        <CardContent>
          <VideoControl store={store} settings={drill} />
          <div className="card-content">
            <Typography variant="body2" color="textSecondary" component="p">
              {drill.details}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
