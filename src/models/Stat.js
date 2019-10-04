import { types } from "mobx-state-tree";

const Stat = types.model("Stat", {
  id: types.string,
  statId: types.integer,
  trainingId: types.integer,
  player: types.string  
});

export default Stat;
