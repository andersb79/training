import { types } from "mobx-state-tree";

const Player = types
  .model("Player", {
    id: types.string,
    player: types.string,
    rating: types.string
  })
  .views(self => ({
    get ratingText() {
      return `Nivå ${self.rating}`;
    }
  }))
  .actions(self => ({
    setRating(rating) {
      self.rating = rating;
    }
  }));

export default Player;
