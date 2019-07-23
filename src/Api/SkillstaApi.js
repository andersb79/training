const config = {
  base: "appC7N77wl4iVEXGD",
  table: "Levels",
  view: "Grid%20view",
  apiKey: "keyHQ5GM7ktar7YtG",
  maxRecords: 100
};

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

export default {
  async getUsers() {
    var resp = await fetch(userRequest).catch(err => {
      console.log(err);
    });
    if (resp.status >= 200 && resp.status < 300) {
      var json = await resp.json();
      return json.records;
    }
  },
  updateUser(user) {
    const url = `https://api.airtable.com/v0/appC7N77wl4iVEXGD/Users/${
      user.id
    }`;

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
  }
};
