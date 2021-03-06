import React, { useState } from "react";
import Game from "./Game";
import Drills from "./Drills";
import ItemList from "./ItemList";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import StarIcon from "@material-ui/icons/Star";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import GroupIcon from "@material-ui/icons/Group";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react-lite";
import Profile from "./Profile";
import HighScore from "./HighScore";
import Help from "./Help";
import Trainings from "./Trainings";
import Episodes from "./Episodes";
import Players from "./Players";
import Number from "./Number";
import Training from "./Training";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import AllDrills from "./AllDrills";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
}));

function Main({ store, onLogout }) {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);

  function handleChange(event, newValue) {
    setTabIndex(newValue);
  }

  if (store.appRunning === "NUMBER") {
    return <Number store={store} />;
  }

  if (store.appRunning === "COLOR") {
    return <Number store={store} colorCount={store.colorCount} />;
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<FitnessCenterIcon />} />
          <Tab icon={<FormatListNumberedIcon />} />
          <Tab icon={<PersonIcon />} />
          {/* <Tab icon={<CalendarTodayIcon />} />
          <Tab icon={<GroupIcon />} />
          <Tab icon={<PersonIcon />} />
          <Tab icon={<PersonIcon />} /> */}
        </Tabs>
      </AppBar>

      {tabIndex === 0 && (
        <TabContainer>
          <Episodes store={store} />
          {/* <Drills store={store} /> */}
        </TabContainer>
      )}
      {tabIndex === 1 && (
        <TabContainer>
          <AllDrills store={store} />
          {/* <Profile store={store} onLogout={onLogout} /> */}
        </TabContainer>
      )}
      {tabIndex === 2 && (
        <TabContainer>
          <Help store={store} />
        </TabContainer>
      )}
      {tabIndex === 3 && (
        <TabContainer>
          <Episodes store={store} />
        </TabContainer>
      )}
      {tabIndex === 4 && (
        <TabContainer>
          <Trainings store={store} />
        </TabContainer>
      )}
      {tabIndex === 5 && (
        <TabContainer>
          <Players store={store} />
        </TabContainer>
      )}
    </div>
  );
}

export default observer(Main);
