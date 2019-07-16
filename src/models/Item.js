import { types, getRoot } from "mobx-state-tree";

const Item = types
  .model("Item", {
    userName: types.string,
    publicId: types.string,
    level: types.integer,
    isDone: types.maybeNull(types.boolean)
  })
  .volatile(self => ({
    isVisible: false
  }))
  .actions(self => ({
    setVisibility(isVisible) {
      self.isVisible = isVisible;
    }
  }))
  .views(self => ({
    get user() {
      const levelStore = getRoot(self);
      return levelStore.users.find(x => x.userName === self.userName);
    },
    get game() {
      const levelStore = getRoot(self);
      return levelStore.levels.find(x => x.level === self.level);
    }
  }));
export default Item;
