import React from "react";
import { observer } from "mobx-react";
import Typography from "@material-ui/core/Typography";

function Help({ store }) {
  return (
    <div className="help">
      <Typography paragraph>Säsong 1:</Typography>
      <Typography paragraph>Filma alltid i horisontellt läge.</Typography>
    </div>
  );
}

export default observer(Help);
