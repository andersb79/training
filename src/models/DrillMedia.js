import { types } from "mobx-state-tree";

const DrillMedia = types
  .model("DrillMedia", {
    id: types.string,
    drillNumber: types.integer,
    description: types.maybeNull(types.string),
    sharedPath: types.maybeNull(types.string),
    fileType: types.maybeNull(types.string),
    posterPath: types.maybeNull(types.string),
  })
  .views((self) => ({
    get src() {
      return `https://www.dropbox.com/s/${self.sharedPath}/Lpass.${self.fileType}?raw=1`;
    },
    get hasSharedPath() {
      return true;
    },
    get dropboxLink() {
      return `https://www.dropbox.com/s/${self.sharedPath}/${self.publicId}.${self.fileType}?raw=1`;
    },
    get dropboxPoster() {
      return `https://www.dropbox.com/s/${self.posterPath}/ConeDrill1.jpg?raw=1`;
    },
  }));

export default DrillMedia;
