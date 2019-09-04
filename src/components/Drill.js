import React from "react";
import Button from "@material-ui/core/Button";
import VideoIcon from "@material-ui/icons/VideoCall";
import TextField from "@material-ui/core/TextField";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { observer } from "mobx-react";

function Drill({ store, onBack }) {
  const [values, setValues] = React.useState({
    name: "",
    description: "",
    details: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function processFile(e) {
    var file = e.target.files[0];

    store.processFile(file, values, text => {
      onBack();
    });
  }

  return (
    <div className="add-drill">
      <div className="back">
        <div className="left">
          <ArrowBackIosIcon onClick={() => onBack()} />
        </div>
        <div className="right">{store.selectedCategory.name}</div>
      </div>

      <TextField
        id="name"
        label="Namn"
        value={values.name}
        onChange={handleChange("name")}
        margin="normal"
      />
      <TextField
        id="description"
        label="Description"
        value={values.description}
        onChange={handleChange("description")}
        margin="normal"
      />
      <TextField
        id="details"
        label="details"
        value={values.details}
        onChange={handleChange("details")}
        margin="normal"
      />

      <div className="fileinputs">
        <input type="file" className="file" onChange={e => processFile(e)} />
        <div className="fakefile">
          <Button variant="outlined">
            Ladda upp <VideoIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default observer(Drill);
