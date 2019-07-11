import { types } from "mobx-state-tree";
const User = types.model("User", {
  userName: types.string,
  name: types.string,
  password: types.string
});
export default User;
