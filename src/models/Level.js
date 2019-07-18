import { types, getRoot } from "mobx-state-tree";
const Level = types
  .model("Level", {
    id: types.string,
    level: types.integer,
    details: types.string,
    name: types.string,
    category: types.string,
    publicId: types.string
  })
  .volatile(self => ({
    isVisible: false
  }))
  .actions(self => ({
    setPublicId(newPublicId) {
      self.publicId = newPublicId;
    },
    setName(newName) {
      self.name = newName;
    },
    setVisibility(isVisible) {
      self.isVisible = isVisible;
    }
  }))
  .views(self => ({
    get status() {
      return self.is_done ? "Done" : "Not Done";
    },
    get isDone() {
      const levelStore = getRoot(self);
      return levelStore.items.some(
        x =>
          x.user.id === levelStore.loggedIn.id &&
          x.isDone &&
          x.level === self.level
      );
    },
    get poster() {
      return { publicId: self.publicId + ".jpg", resourceType: "video" };
    }
  }));
export default Level;
