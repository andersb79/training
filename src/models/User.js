import { types } from "mobx-state-tree";
import { type } from "os";

const User = types.model("User", {
  id: types.string,
  userName: types.string,
  name: types.string,
  password: types.string,
  profileImage: types.string
})
.actions(self => ({
  setProfileImage(newPublicId) {
    self.profileImage = newPublicId;
  }  
}));
export default User;
