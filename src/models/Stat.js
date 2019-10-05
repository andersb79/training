import { types } from "mobx-state-tree";

const Stat = types
  .model("Stat", {
    id: types.string,
    statId: types.integer,
    trainingId: types.integer,
    player: types.string,
    isTraining: types.maybeNull(types.boolean),
    level: types.maybeNull(types.integer)
  })
  .actions(self => ({
    toggleIsTraining() {
      self.isTraining = !self.isTraining;
    },
    setLevel(level) {
      self.level = level;
    }
  }));

export default Stat;
