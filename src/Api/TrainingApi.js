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
      `${config.url}/${conf.table}?maxRecords=${conf.maxRecords}&view=${conf.view}`,
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
  updatePlayer(player) {
    const url = `${config.url}/Players/${player.id}`;

    fetch(
      new Request(url, {
        method: "put",
        body: JSON.stringify({
          fields: {
            player: player.player,
            rating: player.rating
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
  async fetchTrainings() {
    return this.response({ table: "Trainings" });
  },
  async fetchStats() {
    return this.response({ table: "Stat" });
  },
  async fetchPlayers() {
    return this.response({ table: "Players" });
  },
  async fetchItems() {
    return this.response({ table: "Items" });
  },
  addNewDrill(level) {
    fetch(
      new Request(`${config.url}/Levels`, {
        method: "post",
        body: JSON.stringify({
          fields: level
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
  insertLevel(level) {
    fetch(
      new Request(`${config.url}/Levels`, {
        method: "post",
        body: JSON.stringify({
          fields: level
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
  updateStat(stat) {
    const url = `${config.url}/Stat/${stat.id}`;

    fetch(
      new Request(url, {
        method: "put",
        body: JSON.stringify({
          fields: {
            trainingId: stat.trainingId,
            player: stat.player,
            isTraining: stat.isTraining,
            level: stat.level
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
  insertStat(stat) {
    fetch(
      new Request(`${config.url}/Stat`, {
        method: "post",
        body: JSON.stringify({
          fields: stat
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