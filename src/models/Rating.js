import { types } from "mobx-state-tree";

const Rating = types
  .model("Rating", {
    id: types.string,
    name: types.string,
    selected: types.boolean
  })
  .actions(self => ({
    toggleSelect() {
      self.selected = !self.selected;
    }
  }));

export default Rating;
