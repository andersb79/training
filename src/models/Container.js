import { types, getRoot } from "mobx-state-tree";

const Container = types
  .model("Container", {
    id: types.string,
    containerNumber: types.integer,
    episodeNumber: types.integer,
    containerName: types.string,
  })
  .views((self) => ({
    get drillContainers() {
      const levelStore = getRoot(self);
      return levelStore.drillContainers.filter(
        (x) => x.containerNumber === this.containerNumber
      );
    },
  }))
  .actions((self) => ({}));

export default Container;
