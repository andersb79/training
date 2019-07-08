import { types } from "mobx-state-tree";
import Level from "./Level";

const LevelStore = types
  .model("LevelStore", {
    levels: types.array(Level)
  })
  .views(self => ({
    get test() {        
      return "testing";
    }
  }))
  .actions(self => ({
    add(level) {
      self.levels.push(level);
    }
  }));
export default LevelStore;
