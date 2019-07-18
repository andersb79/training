import { types, flow, applySnapshot } from "mobx-state-tree";
import Level from "./Level";
import Item from "./Item";
import User from "./User";

const config = {
  base: "appC7N77wl4iVEXGD",
  table: "Levels",
  view: "Grid%20view",
  apiKey: "keyHQ5GM7ktar7YtG",
  maxRecords: 20
};

const insertLevel = new Request(
  `https://api.airtable.com/v0/appC7N77wl4iVEXGD/Levels`,
  {
    method: "post",
    body: JSON.stringify({
      fields: {
        level: 11,
        name: "Bell Taps",
        details:
          "Transfer ball from side to side in a “bell ringing” motion, using the inside of both feet",
        is_done: false,
        publicId: "xriaksiq3gipz0dupgny",
        category: "Beginner"
      }
    }),
    headers: new Headers({
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json"
    })
  }
);

const request = new Request(
  `https://api.airtable.com/v0/${config.base}/${config.table}?maxRecords=${
    config.maxRecords
  }&view=${config.view}`,
  {
    method: "get",
    headers: new Headers({
      Authorization: `Bearer ${config.apiKey}`
    })
  }
);

const itemsRequest = new Request(
  `https://api.airtable.com/v0/${config.base}/Items?maxRecords=${
    config.maxRecords
  }&view=${config.view}`,
  {
    method: "get",
    headers: new Headers({
      Authorization: `Bearer ${config.apiKey}`
    })
  }
);

const userRequest = new Request(
  `https://api.airtable.com/v0/${config.base}/Users?maxRecords=${
    config.maxRecords
  }&view=${config.view}`,
  {
    method: "get",
    headers: new Headers({
      Authorization: `Bearer ${config.apiKey}`
    })
  }
);

const levelFilters = [
  { id: 0, text: "Alla" },
  { id: 1, text: "Ej klarade" },
  { id: 2, text: "Klarade" }
];

const LevelStore = types
  .model("LevelStore", {
    levels: types.array(Level),
    items: types.array(Item),
    users: types.array(User)
  })
  .views(self => ({
    get test() {
      return "testing";
    },
    get filteredLevels() {
      if (self.levelFilter.id === 0) {
        return self.levels;
      }

      if (self.levelFilter.id === 1) {
        return self.levels.filter(x => !x.isDone);
      }

      if (self.levelFilter.id === 2) {
        return self.levels.filter(x => x.isDone);
      }

      return [];
    },
    get levelFilters() {
      return levelFilters;
    }
  }))
  .volatile(self => ({
    loggedIn: null,
    initzialize: false,
    height: null,
    selectedProfile: null,
    levelFilter: self.levelFilters[0]
  }))
  .actions(self => ({
    selectProfile(profile) {
      self.selectedProfile = profile;
    },
    setLevelFilter(filter) {
      self.levelFilter = filter;
    },
    async refresh() {
      var items = await self.fetchItems();

      const data = [];

      items.reverse();

      items.forEach(elm => {
        elm.fields.id = elm.id;
        elm.fields.createdTime = new Date(elm.createdTime);
        data.push(elm.fields);
      });

      applySnapshot(self.items, data);

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
    async fetchAirtable() {
      var resp = await fetch(request).catch(err => {
        console.log(err);
      });
      if (resp.status >= 200 && resp.status < 300) {
        var json = await resp.json();
        return json.records;
      }
    },
    async fetchItems() {
      var resp = await fetch(itemsRequest).catch(err => {
        console.log(err);
      });
      if (resp.status >= 200 && resp.status < 300) {
        var json = await resp.json();
        return json.records;
      }
    },
    insertItem(item) {
      fetch(
        new Request(`https://api.airtable.com/v0/appC7N77wl4iVEXGD/Items`, {
          method: "post",
          body: JSON.stringify({
            fields: item
          }),
          headers: new Headers({
            Authorization: `Bearer ${config.apiKey}`,
            "Content-Type": "application/json"
          })
        })
      ).catch(err => {
        console.log(err);
      });
    },
    updateUser(user) {
      const url = `https://api.airtable.com/v0/appC7N77wl4iVEXGD/Users/${
        user.id
      }`;
      console.log(url);
      fetch(
        new Request(url, {
          method: "put",
          body: JSON.stringify({
            fields: {
              name: user.name,
              userName: user.userName,
              password: user.password,
              profileImage: user.profileImage,
              favoriteTeam: user.favoriteTeam,
              playerTeam: user.playerTeam,
              position: user.position,
              shirtNumber: user.shirtNumber
            }
          }),
          headers: new Headers({
            Authorization: `Bearer ${config.apiKey}`,
            "Content-Type": "application/json"
          })
        })
      ).catch(err => {
        alert(err);
      });
    },
    async fetchUsers() {
      var resp = await fetch(userRequest).catch(err => {
        console.log(err);
      });
      if (resp.status >= 200 && resp.status < 300) {
        var json = await resp.json();
        return json.records;
      }
    },
    init: flow(function* init(id) {
      var levels = yield self.fetchAirtable();
      var users = yield self.fetchUsers();
      var items = yield self.fetchItems();

      const data = {
        users: [],
        items: [],
        levels: []
      };

      levels.forEach(elm => {
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
    processFile(file, level, onProcessed) {
      var formdata = new FormData();

      formdata.append("file", file);
      formdata.append("cloud_name", "deolievif");
      formdata.append("upload_preset", "kv0do7lj");
      formdata.append("resource_type", "raw");
      formdata.append("title", self.loggedIn.userName);
      //formdata.append("public_id", level.level);
      formdata.append("tags", self.loggedIn.userName);

      var xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://api.cloudinary.com/v1_1/deolievif/video/upload/",
        true
      );

      xhr.onload = function() {
        // do something to response
        var myObj = JSON.parse(this.responseText);
        console.log(myObj);
        //level.setPublicId(myObj.public_id);
        console.log(this.responseText);

        const item = {
          userName: self.loggedIn.userName,
          publicId: myObj.public_id,
          level: level.level,
          isDone: false
        };

        self.insertItem(item);

        self.refresh();
        //self.addItem(item);

        console.log(self.items);

        onProcessed(this.responseText);
      };
      xhr.send(formdata);
    }
  }));
export default LevelStore;
