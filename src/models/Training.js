import { types, getRoot } from "mobx-state-tree";

const Training = types.model("Training", {
  id: types.string,
  trainingId: types.integer,
  date: types.string
});

export default Training;
