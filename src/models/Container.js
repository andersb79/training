import { types, getRoot } from "mobx-state-tree";

const Container = types
  .model("Container", {
    id: types.string,
    containerNumber: types.integer,
    episodeNumber: types.integer,
    containerName: types.string,
  })
  .views((self) => ({
    get store() {
      return getRoot(self);
    },
    get drillContainers() {
      return self.store.drillContainers.filter(
        (x) => x.containerNumber === this.containerNumber
      );
    },
  }))
  .actions((self) => ({}));

export default Container;
