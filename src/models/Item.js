import { types } from "mobx-state-tree";
const Item = types.model("Item", {
  userName: types.string,
  publicId: types.string
});
export default Item;
