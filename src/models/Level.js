import { types, getRoot } from "mobx-state-tree";

const Categories = {
  EASY: "Lätt",
  MEDIUM: "Medium",
  HARD: "Svår"
};

const Level = types
  .model("Level", {
    id: types.string,
    level: types.integer,
    details: types.maybeNull(types.string),
    organisation: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    name: types.string,
    category: types.string,
    publicId: types.maybeNull(types.string),
    season: types.integer,
    sharedPath: types.maybeNull(types.string),
    fileType: types.maybeNull(types.string),
    posterPath: types.maybeNull(types.string),
    minPlayers: types.maybeNull(types.integer),
    maxPlayers: types.maybeNull(types.integer),
    videoId: types.maybeNull(types.string)
  })
  .volatile(self => ({
    isVisible: false
  }))
  .actions(self => ({
    setPublicId(newPublicId) {
      self.publicId = newPublicId;
    },
    setName(newName) {
      self.name = newName;
    },
    setVisibility(isVisible) {
      self.isVisible = isVisible;
    }
  }))
  .views(self => ({
    get src() {
      return `https://www.dropbox.com/s/${self.sharedPath}/Lpass.${self.fileType}?raw=1`;
    },
    get playerCount() {
      if (!self.minPlayers) {
        return "Alla";
      }
      if (self.minPlayers === self.maxPlayers) {
        return `Antal spelare: ${self.minPlayers}`;
      }
      return `Antal spelare: ${self.minPlayers} - ${self.maxPlayers}`;
    },
    get hasSharedPath() {
      return self.sharedPath ? true : false;
    },
    get dropboxLink() {
      return `https://www.dropbox.com/s/${self.sharedPath}/${self.publicId}.${self.fileType}?raw=1`;
    },
    get dropboxPoster() {
      return `https://www.dropbox.com/s/${self.posterPath}/ConeDrill1.jpg?raw=1`;
    },
    get categoryName() {
      return Categories[self.category];
    },
    get medias() {
      const levelStore = getRoot(self);
      return levelStore.levelMedias.filter(x => x.level === this.level);
    },
    get isDone() {
      const levelStore = getRoot(self);
      return levelStore.items.some(
        x =>
          x.user.id === levelStore.loggedIn.id &&
          x.isDone &&
          x.level === self.level
      );
    },
    get points() {
      if (self.category === "EASY") {
        return 5;
      }

      if (self.category === "MEDIUM") {
        return 10;
      }

      if (self.category === "HARD") {
        return 20;
      }

      return 0;
    },
    get displayText() {
      return `${self.categoryName} - ${self.points} POÄNG`;
    },
    get poster() {
      return { publicId: self.publicId + ".jpg", resourceType: "video" };
    }
  }));
export default Level;
