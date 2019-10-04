import { types } from "mobx-state-tree";

const Training = types.model("Training", {
  id: types.string,
  description: types.string
});

export default Training;
