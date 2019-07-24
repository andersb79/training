const config = {
  base: "app9IO48CYcfaIY4Z",
  table: "Levels",
  view: "Grid%20view",
  apiKey: "keyHQ5GM7ktar7YtG",
  maxRecords: 100,
  url: "https://api.airtable.com/v0/app9IO48CYcfaIY4Z"
};

export default {
  generalRequest({ maxRecords, table, view }) {
    const conf = config;
    if (maxRecords) {
      conf.maxRecords = maxRecords;
    }
    if (view) {
      conf.view = view;
    }
    if (table) {
      conf.table = table;
    }

    return new Request(
      `${config.url}/${conf.table}?maxRecords=${conf.maxRecords}&view=${
        conf.view
      }`,
      {
        method: "get",
        headers: new Headers({
          Authorization: `Bearer ${conf.apiKey}`
        })
      }
    );
  },
  async response(conf) {
    var resp = await fetch(this.generalRequest(conf)).catch(err => {
      console.log(err);
    });
    if (resp.status >= 200 && resp.status < 300) {
      var json = await resp.json();
      return json.records;
    }
  },
  async getUsers() {
    return this.response({ table: "Users" });
  },
  updateUser(user) {
    const url = `${config.url}/Users/${user.id}`;

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
  async fetchLevels() {
    return this.response({ table: "Levels" });
  },
  async fetchItems() {
    return this.response({ table: "Items" });
  },
  insertItem(item) {
    fetch(
      new Request(`${config.url}/Items`, {
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
  }
};
