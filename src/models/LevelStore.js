import { types, flow, applySnapshot } from "mobx-state-tree";
import Level from "./Level";
import LevelMedia from "./LevelMedia";
import Item from "./Item";
import User from "./User";
import Training from "./Training";
import Player from "./Player";
import Rating from "./Rating";
import Stat from "./Stat";
import Episode from "./Episode";
import DrillContainer from "./DrillContainer";
import Drill from "./Drill";
import DrillMedia from "./DrillMedia";
import Container from "./Container";

const levelFilters = [
  { id: 0, text: "Alla utmaningar" },
  { id: 1, text: "Ej klarade utmaningar" },
  { id: 2, text: "Klarade utmaningar" },
];

const categories = [
  {
    id: 0,
    category: "BALLMASTERY",
    name: "DEL 1 - Teknik/Passningar",
    image: "BAL.jpg",
  },
  {
    id: 1,
    category: "PASSINGDRILLS",
    name: "DEL 2 - Kombinationer",
    image: "DRI.jpg",
  },
  {
    id: 2,
    category: "POSSESION",
    name: "DEL 3 - Possession/spel",
    image: "THE.jpg",
  },
  // { id: 3, category: "CONEDRILLS", name: "slask" }
  // { id: 4, category: "ATTACKING", name: "Attack" },
  // { id: 5, category: "POSESSION", name: "Posesion" }
];

const appRunning = { MAIN: "MAIN", NUMBER: "NUMBER", COLOR: "COLOR" };

const LevelStore = types
  .model("LevelStore", {
    levels: types.array(Level),
    levelMedias: types.array(LevelMedia),
    items: types.array(Item),
    users: types.array(User),
    trainings: types.array(Training),
    players: types.array(Player),
    ratings: types.array(Rating),
    stats: types.array(Stat),
    episodes: types.array(Episode),
    containers: types.array(Container),
    drillContainers: types.array(DrillContainer),
    drills: types.array(Drill),
    drillMedias: types.array(DrillMedia),
  })
  .views((self) => ({
    get listCategories() {
      return categories;
    },
    get filteredItems() {
      return self.items.filter(
        (x) => x.isDone || x.userName === self.loggedIn.userName
      );
    },
    get highScoreList() {
      //   return self.users.sort(x => x.highscore);
      var byHighscore = self.users.slice(0);
      byHighscore.sort((a, b) => {
        var x = a.highscore;
        var y = b.highscore;
        return x < y ? -1 : x > y ? 1 : 0;
      });
      return byHighscore.reverse();
    },
    get filteredLevels() {
      return self.levels.filter(
        (x) => x.category === self.selectedCategory.category
      );
    },
    get filteredPlayersInTraining() {
      var players = self.players.filter((x) => x.isTraining);

      return players;
    },
    get filteredPlayersInTrainingEasy() {
      var players = self.players.filter(
        (x) => x.isTraining && x.currentStat.level === 1
      );

      return players;
    },
    get filteredPlayersInTrainingHard() {
      var players = self.players.filter(
        (x) => x.isTraining && x.currentStat.level === 2
      );

      return players;
    },
    get filteredPlayersInTrainingUn() {
      var players = self.orderedPlayers.filter(
        (x) => x.isTraining && x.currentStat.level === null
      );

      return players;
    },

    get filteredPlayersOnLevel2Teams() {
      var players = self.filteredPlayers.filter(
        (x) => x.isTraining && x.currentStat.level === null
      );

      const teamCount = players.length / 2;

      const team1 = { name: "lag1", players: players.slice(0, teamCount) };
      const team2 = {
        name: "lag2",
        players: players.slice(teamCount, players.length),
      };

      return [team1, team2];
    },

    get filteredPlayersOnNoLevel2Teams() {
      const ratedPlayers = self.filteredPlayersOnLevel2Teams;

      const highPlayers = self.shuffle(ratedPlayers[0].players);
      const lowPlayers = self.shuffle(ratedPlayers[1].players);

      const highPlayersHalfCount = highPlayers.length / 2;
      const lowPlayersHalfCount = lowPlayers.length / 2;

      const playersTeam1High = highPlayers.slice(0, highPlayersHalfCount);
      const playersTeam2High = highPlayers.slice(
        highPlayersHalfCount,
        highPlayers.count
      );

      const playersTeam1Low = lowPlayers.slice(0, lowPlayersHalfCount);
      const playersTeam2Low = lowPlayers.slice(
        lowPlayersHalfCount,
        lowPlayers.count
      );

      const team1 = {
        name: "lag1",
        players: playersTeam1High.concat(playersTeam2Low),
      };
      const team2 = {
        name: "lag2",
        players: playersTeam2High.concat(playersTeam1Low),
      };

      return [team1, team2];
    },

    get filteredPlayers() {
      var players = self.players.filter((x) =>
        self.ratings.find((xx) => xx.selected && xx.id === x.rating)
      );

      var byRating = players.slice(0);
      byRating.sort((a, b) => {
        var x = a.rating;
        var y = b.rating;
        return x < y ? -1 : x > y ? 1 : 0;
      });
      return byRating.reverse();
    },
    get levelFilters() {
      return levelFilters;
    },
    get currentTraining() {
      return self.trainings[self.trainingIndex];
    },
    get hasStats() {
      const stat = self.stats.find(
        (x) => x.trainingId === self.currentTraining.trainingId
      );

      return stat ? true : false;
    },
    get orderedPlayers() {
      var orderdPlayers = self.filteredPlayersInTraining.slice(0);
      orderdPlayers.sort((a, b) => {
        var x = a.diff;
        var y = b.diff;
        return x < y ? -1 : x > y ? 1 : 0;
      });

      orderdPlayers.reverse();

      orderdPlayers.forEach((x) => {
        console.log(
          `Namn: ${x.player} Nuvarande diff: ${x.diff} _ Ska ha:  ${x.benchmarkHard} svår _ har ${x.benchmarkHardValue}`
        );
      });

      return orderdPlayers;
    },
  }))
  .volatile((self) => ({
    loggedIn: null,
    initzialize: false,
    height: null,
    selectedCategory: null,
    selectedEpisode: null,
    selectedContainer: null,
    selectedPlayer: null,
    selectedDrill: null,
    levelFilter: self.levelFilters[0],
    api: null,
    appRunning: appRunning.MAIN,
    colorCount: 2,
    currentSeason: 1,
    trainingIndex: 3,
  }))
  .actions((self) => ({
    setPrevTraining() {
      console.log(self.trainingIndex);
      if (self.trainingIndex !== 0) {
        self.trainingIndex--;
      }
    },
    setNextTraining() {
      if (self.trainings.length - 1 !== self.trainingIndex) {
        self.trainingIndex++;
      }
    },
    setTrainingIndex(index) {
      self.trainingIndex = index;
    },
    updateLevelOnStat() {
      const count = self.filteredPlayersInTraining.length;
      const easy = count / 2;
      let easyCount = 0;

      //lägg på rating 1 användare
      self.orderedPlayers
        .filter((x) => x.rating === "1")
        .forEach((x) => {
          x.currentStat.setLevel(1);
          easyCount++;

          self.updateStat(x.currentStat);
        });

      self.orderedPlayers
        .filter((x) => x.rating !== "1")
        .forEach((x) => {
          if (x.nextLevel === 1 && easyCount <= easy) {
            x.currentStat.setLevel(1);
            easyCount++;
          } else {
            x.currentStat.setLevel(2);
          }
          self.updateStat(x.currentStat);
        });

      //lägg på rating 2 användare
      // self.orderedPlayers
      //   .filter(x => x.rating === "2")
      //   .forEach(x => {
      //     if (easyCount >= easy) {
      //       x.currentStat.setLevel(2);
      //     } else {
      //       x.currentStat.setLevel(1);
      //       easyCount++;
      //     }

      //     self.updateStat(x.currentStat);
      //   });

      // //lägg på rating 3 användare
      // self.orderedPlayers
      //   .filter(x => x.rating === "3")
      //   .forEach(x => {
      //     if (easyCount >= easy) {
      //       x.currentStat.setLevel(2);
      //     } else {
      //       x.currentStat.setLevel(x.nextLevel);
      //       if (x.nextLevel === 1) {
      //         easyCount++;
      //       }
      //     }

      //     self.updateStat(x.currentStat);
      //   });

      // //lägg på rating 4 användare
      // self.orderedPlayers
      //   .filter(x => x.rating === "4")
      //   .forEach(x => {
      //     if (easyCount >= easy) {
      //       x.currentStat.setLevel(2);
      //     } else {
      //       x.currentStat.setLevel(x.nextLevel);
      //       if (x.nextLevel === 1) {
      //         easyCount++;
      //       }
      //     }

      //     self.updateStat(x.currentStat);
      //   });

      self.refresh();
    },
    startTraining() {
      self.players.forEach((x) => {
        self.api.insertStat({
          trainingId: self.currentTraining.trainingId,
          player: x.player,
          isTraining: false,
        });
      });

      self.refresh();
    },
    setColorCount(count) {
      self.colorCount = count;
    },
    setRunningApp(app) {
      self.appRunning = app;
    },
    selectCategory(category) {
      self.selectedCategory = category;
    },
    selectEpisode(episode) {
      self.selectedEpisode = episode;
    },
    selectContainer(container) {
      self.selectedContainer = container;
    },
    selectPlayer(player) {
      self.selectedPlayer = player;
    },
    selectDrill(level) {
      self.selectedDrill = level;
    },
    setLevelFilter(filter) {
      self.levelFilter = filter;
    },
    async fetchAll() {
      var users = await self.api.fetchUsers();
      var levels = await self.api.fetchLevels();
      var levelMedias = await self.api.fetchLevelMedias();
      var items = await self.api.fetchItems();
      var players = await self.api.fetchPlayers();
      var trainings = await self.api.fetchTrainings();
      var stats = await self.api.fetchStats();
      var episodes = await self.api.fetchEpisodes();
      var containers = await self.api.fetchContainers();
      var drillContainers = await self.api.fetchDrillContainers();
      var drills = await self.api.fetchDrills();
      var drillMedias = await self.api.fetchDrillMedia();
      console.log(levelMedias);
      const data = {
        users: [],
        items: [],
        levels: [],
        levelMedias: [],
        trainings: [],
        stats: [],
        players: [],
        ratings: [
          { id: "1", name: "Nivå 1", selected: true },
          { id: "2", name: "Nivå 2", selected: true },
          { id: "3", name: "Nivå 3", selected: true },
          { id: "4", name: "Nivå 4", selected: true },
        ],
        episodes: [],
        containers: [],
        drillContainers: [],
        drills: [],
        drillMedias: [],
      };

      episodes.forEach((elm) => {
        elm.fields.id = elm.id;
        data.episodes.push(elm.fields);
      });

      containers.forEach((elm) => {
        elm.fields.id = elm.id;
        data.containers.push(elm.fields);
      });

      drillContainers.forEach((elm) => {
        elm.fields.id = elm.id;
        data.drillContainers.push(elm.fields);
      });

      drills.forEach((elm) => {
        elm.fields.id = elm.id;
        data.drills.push(elm.fields);
      });

      drillMedias.forEach((elm) => {
        elm.fields.id = elm.id;
        data.drillMedias.push(elm.fields);
      });

      stats.forEach((elm) => {
        elm.fields.id = elm.id;
        data.stats.push(elm.fields);
      });

      trainings.forEach((elm) => {
        elm.fields.id = elm.id;
        data.trainings.push(elm.fields);
      });

      players.forEach((elm) => {
        elm.fields.id = elm.id;
        data.players.push(elm.fields);
      });

      levels.forEach((elm) => {
        elm.fields.id = elm.id;
        data.levels.push(elm.fields);
      });

      levelMedias.forEach((elm) => {
        elm.fields.id = elm.id;
        data.levelMedias.push(elm.fields);
      });

      users.forEach((elm) => {
        elm.fields.id = elm.id;
        data.users.push(elm.fields);
      });

      items.reverse();

      items.forEach((elm) => {
        elm.fields.id = elm.id;
        elm.fields.createdTime = new Date(elm.createdTime);
        data.items.push(elm.fields);
      });

      return data;
    },
    async refresh() {
      const data = await self.fetchAll();

      applySnapshot(self, data);

      return true;
    },
    setHeight(height) {
      self.height = height;
    },
    logout() {
      self.loggedIn = null;
    },
    login(userName, password) {
      self.loggedIn = self.users.find(
        (x) => x.userName === userName && x.password === password
      );

      if (self.loggedIn) {
        return true;
      }

      return false;
    },
    login2(id) {
      self.loggedIn = self.users.find((x) => x.id === JSON.parse(id));

      if (self.loggedIn) {
        return true;
      }

      return false;
    },
    add(level) {
      self.levels.push(level);
    },
    addItem(item) {
      self.items.push(item);
    },
    updateUser(user) {
      self.api.updateUser(user);
    },
    updatePlayer(player) {
      self.api.updatePlayer(player);
    },
    insertStat(stat) {
      self.api.insertStat(stat);

      self.refresh();
    },
    insertEpisode() {
      self.api.insertEpisode({
        episodeName: "Testing",
      });
      self.refresh();
    },
    insertContainer() {
      self.api.insertContainer({
        episodeNumber: self.selectedEpisode.episodeNumber,
        containerName: "Container",
      });
      self.refresh();
    },
    insertDrillContainer(container) {
      self.api.insertDrillContainer({
        containerNumber: container.containerNumber,
        drillNumber: 1,
      });
      self.refresh();
    },
    insertDrill(name) {
      self.api.insertDrill({
        description: name,
      });
      self.refresh();
    },
    updateStat(stat) {
      self.api.updateStat(stat);
    },
    init: flow(function* init(api, id) {
      self.api = api;
      const data = yield self.fetchAll();

      const date = new Date();
      const findNextTraining = data.trainings.find(
        (x) => new Date(x.date) > date
      );

      self.trainingIndex = data.trainings.indexOf(findNextTraining);

      applySnapshot(self, data);

      if (id) {
        self.login2(id);
      }

      self.initzialize = true;
    }),
    uploadImage(file, onProcessed) {
      var formdata = new FormData();

      formdata.append("file", file);
      formdata.append("cloud_name", "deolievif");
      formdata.append("upload_preset", "kv0do7lj");
      formdata.append("title", self.loggedIn.userName);
      formdata.append("tags", self.loggedIn.userName);

      var xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://api.cloudinary.com/v1_1/deolievif/image/upload",
        true
      );

      xhr.onload = function () {
        // do something to response

        var myObj = JSON.parse(this.responseText);
        self.loggedIn.setProfileImage(myObj.public_id);
        self.updateUser(self.loggedIn);

        onProcessed(this.responseText);
      };
      xhr.send(formdata);
    },
    shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    processFile(file, values, onProcessed) {
      var formdata = new FormData();

      const isImage =
        file.type === "image/jpeg" || file.type === "image/png" ? true : false;

      formdata.append("file", file);
      formdata.append("cloud_name", "deolievif");
      formdata.append("upload_preset", "kv0do7lj");

      if (!isImage) {
        formdata.append("resource_type", "raw");
      }

      formdata.append("title", self.loggedIn.userName);
      //formdata.append("public_id", level.level);
      formdata.append("tags", self.loggedIn.userName);

      const uploadUrl = isImage
        ? "https://api.cloudinary.com/v1_1/deolievif/image/upload"
        : "https://api.cloudinary.com/v1_1/deolievif/video/upload/";

      var xhr = new XMLHttpRequest();
      xhr.open("POST", uploadUrl, true);

      xhr.onload = function () {
        // do something to response
        var myObj = JSON.parse(this.responseText);
        console.log(myObj);
        //level.setPublicId(myObj.public_id);
        console.log(this.responseText);

        const level = {
          name: values.name,
          description: values.description,
          publicId: myObj.public_id,
          category: self.selectedCategory.category,
          details: "details",
          season: 1,
          fileType: isImage ? "jpg" : "mp4",
        };

        self.api.insertLevel(level);

        self.refresh();

        onProcessed(this.responseText);
      };
      xhr.send(formdata);
    },
    processFile2(file, values, onProcessed) {
      var formdata = new FormData();

      const isImage =
        file.type === "image/jpeg" || file.type === "image/png" ? true : false;

      formdata.append("file", file);
      formdata.append("cloud_name", "deolievif");
      formdata.append("upload_preset", "kv0do7lj");

      if (!isImage) {
        formdata.append("resource_type", "raw");
      }

      formdata.append("title", self.loggedIn.userName);
      //formdata.append("public_id", level.level);
      formdata.append("tags", self.loggedIn.userName);

      const uploadUrl = isImage
        ? "https://api.cloudinary.com/v1_1/deolievif/image/upload"
        : "https://api.cloudinary.com/v1_1/deolievif/video/upload/";

      var xhr = new XMLHttpRequest();
      xhr.open("POST", uploadUrl, true);

      xhr.onload = function () {
        // do something to response
        var myObj = JSON.parse(this.responseText);
        console.log(myObj);
        //level.setPublicId(myObj.public_id);
        console.log(this.responseText);

        const drill = {
          description: values.description,
          sharedPath: myObj.public_id,
          fileType: isImage ? "jpg" : "mp4",
        };

        self.api.insertDrill(drill);

        self.refresh();

        onProcessed(this.responseText);
      };
      xhr.send(formdata);
    },
  }));
export default LevelStore;
