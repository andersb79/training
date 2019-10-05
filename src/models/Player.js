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
    },
    get isTraining(){
      const levelStore = getRoot(self);
      const stat = levelStore.stats.find(x => x.trainingId === levelStore.currentTraining.trainingId && x.player === self.player);
      if(stat){
      return stat.isTraining;
      }
      return false;
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
        stat.toggleIsTraining();
        levelStore.updateStat(stat);
      } else {
        levelStore.insertStat({trainingId: levelStore.currentTraining.trainingId, player: self.player, isTraining: true, level: 1});
      }      
    }
  }));

export default Player;
