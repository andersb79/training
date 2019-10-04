import { types } from "mobx-state-tree";

const Player = types.model("Player", {
  id: types.string,
  name: types.string
});

export default Player;
