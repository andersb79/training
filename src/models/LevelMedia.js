import { types } from "mobx-state-tree";

const LevelMedia = types.model("LevelMedia", {
  id: types.string,
  level: types.integer,
  sharedPath: types.maybeNull(types.string),
  fileType: types.maybeNull(types.string),
  posterPath: types.maybeNull(types.string)
});

export default LevelMedia;
