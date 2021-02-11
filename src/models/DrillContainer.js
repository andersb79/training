import { types, getRoot } from "mobx-state-tree";

const DrillContainer = types
  .model("DrillContainer", {
    id: types.string,
    containerNumber: types.integer,
    drillNumber: types.integer,
  })
  .views((self) => ({
    get drillContainers() {
      const levelStore = getRoot(self);
      const a = levelStore.drillContainers.filter(
        (x) => x.drillNumber === this.drillNumber
      );
      return a;
    },
  }))
  .actions((self) => ({}));

export default DrillContainer;
