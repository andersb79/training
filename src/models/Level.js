import { types } from "mobx-state-tree";
const Level = types
  .model("Level", {
    level: types.integer,
    details: types.string,
    is_done: false,
    name: types.string,
    category: types.string,
    publicId: types.string
  })
  .actions(self => ({
    markDone() {
      self.is_done = true;
    },
    setPublicId(newPublicId) {
      self.publicId = newPublicId;
    },
    setName(newName) {
      self.name = newName;
    }
  }))
  .views(self => ({
    status() {
      return self.is_done ? "Done" : "Not Done";
    }
  }));
export default Level;
