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

      const data = {
        "users": [],
        "items": [],
        "levels": []
      }

      levels.forEach(elm => {
        data.levels.push(elm.fields);
      });

      users.forEach(elm => {
        data.users.push(elm.fields);
      });

      applySnapshot(self, data);
    }),
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

        self.addItem({
          userName: self.loggedIn.userName,
          publicId: myObj.public_id
        });

        console.log(self.items);

        onProcessed(this.responseText);
      };
      xhr.send(formdata);
    }
  }));
export default LevelStore;
