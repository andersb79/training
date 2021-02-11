import { types, getRoot } from "mobx-state-tree";

const Episode = types
  .model("Episode", {
    id: types.string,
    episodeNumber: types.integer,
    episodeName: types.string,
  })
  .views((self) => ({
    get containers() {
      const levelStore = getRoot(self);
      const a = levelStore.containers.filter(
        (x) => x.episodeNumber === this.episodeNumber
      );
      return a;
    },
  }))
  .actions((self) => ({}));

export default Episode;
