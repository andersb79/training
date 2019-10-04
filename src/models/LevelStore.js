import { types, flow, applySnapshot } from "mobx-state-tree";
import Level from "./Level";
import Item from "./Item";
import User from "./User";
import Training from "./Training";
import Player from "./Player";

const levelFilters = [
  { id: 0, text: "Alla utmaningar" },
  { id: 1, text: "Ej klarade utmaningar" },
  { id: 2, text: "Klarade utmaningar" }
];

const categories = [
  { id: 0, category: "BALLMASTERY", name: "DEL 1 - Teknik/Passningar" },
  { id: 1, category: "PASSINGDRILLS", name: "DEL 2 - Kombinationer" },
  { id: 2, category: "POSSESION", name: "DEL 3 - Possession/spel" }
  // { id: 3, category: "CONEDRILLS", name: "slask" }
  // { id: 4, category: "ATTACKING", name: "Attack" },
  // { id: 5, category: "POSESSION", name: "Posesion" }
];

const appRunning = { MAIN: "MAIN", NUMBER: "NUMBER", COLOR: "COLOR" };

const LevelStore = types
  .model("LevelStore", {
    levels: types.array(Level),
    items: types.array(Item),
    users: types.array(User),
    trainings: types.array(Training),
    players: types.array(Player)
  })
  .views(self => ({
    get listCategories() {
      return categories;
    },
    get filteredItems() {
      return self.items.filter(
        x => x.isDone || x.userName === self.loggedIn.userName
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
        x => x.category === self.selectedCategory.category
      );
    },
    get levelFilters() {
      return levelFilters;
    },
    get currentTraining() {
      return self.trainings[0];
    }
  }))
  .volatile(self => ({
    loggedIn: null,
    initzialize: false,
    height: null,
    selectedCategory: null,
    selectedDrill: null,
    levelFilter: self.levelFilters[0],
    api: null,
    appRunning: appRunning.MAIN,
    colorCount: 2,
    currentSeason: 1
  }))
  .actions(self => ({
    setColorCount(count) {
      self.colorCount = count;
    },
    setRunningApp(app) {
      self.appRunning = app;
    },
    selectCategory(category) {
      self.selectedCategory = category;
    },
    selectDrill(level) {
      self.selectedDrill = level;
    },
    setLevelFilter(filter) {
      self.levelFilter = filter;
    },
    async fetchAll() {
      var users = await self.api.getUsers();
      var levels = await self.api.fetchLevels();
      var items = await self.api.fetchItems();

      const data = {
        users: [],
        items: [],
        levels: [],
        trainings: [
          { id: "1", description: "7 oktober", active: true },
          { id: "2", description: "9 oktober", active: false },
          { id: "2", description: "14 oktober", active: false },
          { id: "2", description: "16 oktober", active: false }
        ],
        players: [{ id: "1", name: "Gustav" }, { id: "2", name: "Oskar" }]
      };

      levels.forEach(elm => {
        elm.fields.id = elm.id;
        data.levels.push(elm.fields);
      });

      users.forEach(elm => {
        elm.fields.id = elm.id;
        data.users.push(elm.fields);
      });

      items.reverse();

      items.forEach(elm => {
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
        x => x.userName === userName && x.password === password
      );

      if (self.loggedIn) {
        return true;
      }

      return false;
    },
    login2(id) {
      self.loggedIn = self.users.find(x => x.id === JSON.parse(id));

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
    init: flow(function* init(api, id) {
      self.api = api;
      const data = yield self.fetchAll();

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

      xhr.onload = function() {
        // do something to response

        var myObj = JSON.parse(this.responseText);
        self.loggedIn.setProfileImage(myObj.public_id);
        self.updateUser(self.loggedIn);

        onProcessed(this.responseText);
      };
      xhr.send(formdata);
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

      xhr.onload = function() {
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
          fileType: isImage ? "jpg" : "mp4"
        };

        self.api.insertLevel(level);

        self.refresh();

        onProcessed(this.responseText);
      };
      xhr.send(formdata);
    }
  }));
export default LevelStore;
