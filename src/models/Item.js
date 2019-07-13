import { types, getRoot } from "mobx-state-tree";

const Item = types.model("Item", {
  userName: types.string,
  publicId: types.string,
  level: types.integer
}).views(self => ({
  get user() {
    const levelStore = getRoot(self);    
    return levelStore.users.find(x => x.userName == self.userName);
  }
  
}));
export default Item;
