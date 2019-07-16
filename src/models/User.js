import { types, getRoot } from "mobx-state-tree";

const User = types
  .model("User", {
    id: types.string,
    userName: types.string,
    name: types.string,
    password: types.string,
    profileImage: types.string
  })
  .views(self => ({
    get levelStore() {
      const levelStore = getRoot(self);
      return levelStore;
    },
    get items() {
      return self.levelStore.items.filter(x => x.userName === self.userName);
    },
    get highscore() {
      return self.items.length === 0 ? 0 : self.items.length;
    },
    get nextChallange() {
      return self.levelStore.levels[self.items.length];
    }
  }))
  .actions(self => ({
    setProfileImage(newPublicId) {
      self.profileImage = newPublicId;
    }
  }));
export default User;
