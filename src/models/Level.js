import { types } from "mobx-state-tree";
const Level = types
  .model("Level", {
    level: types.integer,
    details: types.string,
    is_done: false,
    name: types.string,
    link: types.string   
  })
  .actions(self => ({
    markDone() {
      self.is_done = true;
    }
  }))
  .views(self => ({
    status() {
      return self.is_done ? "Done" : "Not Done";
    }
  }));
export default Level;
