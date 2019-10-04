import { types, getRoot } from "mobx-state-tree";

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
    },
    toggleTraining() {
      const levelStore = getRoot(self);
      const stat = levelStore.stats.find(x => x.trainingId === levelStore.currentTraining.trainingId && x.player === self.player);
      if(stat) {
        levelStore.removeStat(stat);
      } else {
        levelStore.insertStat({trainingId: levelStore.currentTraining.trainingId, player: self.player});
      }
      
    }
  }));

export default Player;
