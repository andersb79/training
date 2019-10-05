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
    get allStat() {
      const levelStore = getRoot(self);
      const stat = levelStore.stats.filter(
        x => x.player === self.player && x.isTraining
      );
      if (stat) {
        return stat;
      }
      return null;
    },
    get myRatio() {
      const allStat = self.allStat;

      const allEasy = allStat.filter(x => x.level === 1).length;
      const allHard = allStat.filter(x => x.level === 2).length;

      const trainings = allStat.length;

      const al = allHard % trainings;

      return { easy: 100 - al, hard: al };
    },
    get failRate() {
      if (self.rating === "1") {
        return 100 - self.myRatio.easy;
      }
      if (self.rating === "2") {
        return 75 - self.myRatio.easy;
      }
      if (self.rating === "3") {
        return 50 - self.myRatio.easy;
      }
      if (self.rating === "4") {
        return 25 - self.myRatio.easy;
      }
    },
    get myRatioText() {
      return (
        self.myRatio.easy +
        "% Lätt, " +
        self.myRatio.hard +
        "% Svår (" +
        self.ratio +
        ")"
      );
    },
    get nextLevel() {
      const myRatio = self.myRatio;
      if (self.rating === "1") {
        return 1;
      }
      if (self.rating === "2") {
        return myRatio.easy < 75 ? 1 : 2;
      }
      if (self.rating === "3") {
        return myRatio.easy < 50 ? 1 : 2;
      }
      if (self.rating === "4") {
        return myRatio.easy < 25 ? 1 : 2;
      }
      return 1;
    },
    get ratio() {
      const allStat = self.allStat;
      if (self.rating === "1") {
        return "100% Lätt";
      }
      if (self.rating === "2") {
        return "75% Lätt 1, 25% Svår";
      }
      if (self.rating === "3") {
        return "50% Lätt, 50 % Svår";
      }
      if (self.rating === "4") {
        return "25% Lätt, 75% Svår";
      }
      return "tom";
    },
    get currentStat() {
      const levelStore = getRoot(self);
      const stat = levelStore.stats.find(
        x =>
          x.trainingId === levelStore.currentTraining.trainingId &&
          x.player === self.player
      );
      if (stat) {
        return stat;
      }
      return null;
    },
    get isTraining() {
      const levelStore = getRoot(self);
      const stat = levelStore.stats.find(
        x =>
          x.trainingId === levelStore.currentTraining.trainingId &&
          x.player === self.player
      );
      if (stat) {
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
      const stat = levelStore.stats.find(
        x =>
          x.trainingId === levelStore.currentTraining.trainingId &&
          x.player === self.player
      );
      if (stat) {
        stat.toggleIsTraining();
        //stat.setLevel(self.nextLevel);
        levelStore.updateStat(stat);
      } else {
        levelStore.insertStat({
          trainingId: levelStore.currentTraining.trainingId,
          player: self.player,
          isTraining: true
        });
      }
    }
  }));

export default Player;
