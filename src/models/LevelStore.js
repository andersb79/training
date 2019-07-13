import { types, flow, applySnapshot, getEnv } from "mobx-state-tree";
import { toJS } from "mobx";
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
      const array = [];
      array.push(self.levels[0]);
      return array;
    }
  }))
  .volatile(self => ({
    loggedIn: null
  }))
  .actions(self => ({
    login(userName, password) {
      self.loggedIn = self.users.find(x => x.userName === userName);
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
      const url = `https://api.airtable.com/v0/appC7N77wl4iVEXGD/Users/recPDEuzfAvPaJ5Jf`;
      console.log(url);
      fetch(
        new Request(url, {
          method: "put",
          body: JSON.stringify({
            fields: {
              name: "Gustav Karlsson",
              userName: "gk",
              password: "gk",
              profileImage: user.profileImage
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
    init: flow(function* saveRule(rule) {
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

      items.forEach(elm => {
        data.items.push(elm.fields);
      });

      applySnapshot(self, data);
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
        //"https://api.cloudinary.com/v1_1/deolievif/image/upload",
        "https://api.cloudinary.com/v1_1/deolievif/video/upload/",
        true
      );

      xhr.onload = function() {
        // do something to response
        var myObj = JSON.parse(this.responseText);
        console.log(myObj);
        //level.setPublicId(myObj.public_id);
        console.log(this.responseText);

        self.insertItem({
          userName: self.loggedIn.userName,
          publicId: myObj.public_id
        });

        self.addItem({
          userName: self.loggedIn.userName,
          level: level,
          publicId: myObj.public_id
        });

        console.log(self.items);

        onProcessed(this.responseText);
      };
      xhr.send(formdata);
    }
  }));
export default LevelStore;
