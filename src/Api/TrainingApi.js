import { all } from "q";
import Airtable from "airtable";

const base = new Airtable({ apiKey: "keyHQ5GM7ktar7YtG" }).base(
  "app9IO48CYcfaIY4Z"
);

Airtable.configure({ apiKey: "YOUR_SECRET_API_KEY" });

const config = {
  base: "app9IO48CYcfaIY4Z",
  table: "Levels",
  view: "Grid%20view",
  apiKey: "keyHQ5GM7ktar7YtG",
  maxRecords: 1000,
  url: "https://api.airtable.com/v0/app9IO48CYcfaIY4Z",
};

export default {
  async fetchUsers() {
    const data = await base("Users").select({ view: "Grid view" }).all();

    return data;
  },
  async fetchLevels() {
    const data = await base("Levels").select({ view: "Grid view" }).all();

    return data;
  },
  async fetchLevelMedias() {
    const data = await base("LevelMedia").select({ view: "Grid view" }).all();

    return data;
  },
  async fetchTrainings() {
    const data = await base("Trainings").select({ view: "Grid view" }).all();

    return data;
  },
  async fetchEpisodes() {
    const data = await base("Episodes").select({ view: "Grid view" }).all();

    return data;
  },
  async fetchContainers() {
    const data = await base("Containers").select({ view: "Grid view" }).all();

    return data;
  },
  async fetchDrillContainers() {
    const data = await base("DrillContainers")
      .select({ view: "Grid view" })
      .all();

    return data;
  },
  async fetchDrills() {
    const data = await base("Drills").select({ view: "Grid view" }).all();

    return data;
  },
  async fetchDrillMedia() {
    const data = await base("DrillMedia").select({ view: "Grid view" }).all();

    return data;
  },
  async fetchStats() {
    const data = await base("Stat").select({ view: "Grid view" }).all();

    return data;
  },
  async fetchPlayers() {
    const data = await base("Players").select({ view: "Grid view" }).all();

    return data;
  },
  async fetchItems() {
    const data = await base("Items").select({ view: "Grid view" }).all();

    return data;
  },
  insertLevel(level) {
    console.log("insert level");
    const u = {
      id: level.id,
      fields: level,
    };
    this.create("Levels", u);
  },
  insertStat(stat) {
    console.log("insert stat");
    const u = {
      id: stat.id,
      fields: stat,
    };

    this.create("Stat", u);
  },
  create(table, item) {
    base(table).create([item], function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
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
            level: stat.level,
          },
        }),
        headers: new Headers({
          Authorization: `Bearer ${config.apiKey}`,
          "Content-Type": "application/json",
        }),
      })
    ).catch((err) => {
      alert(err);
    });
  },
  updateUser(user) {
    console.log(user.JSON);
    const u = {
      id: user.id,
      fields: {
        name: user.name,
        userName: user.userName,
        password: user.password,
        profileImage: user.profileImage,
        favoriteTeam: user.favoriteTeam,
        playerTeam: user.playerTeam,
        position: user.position,
        shirtNumber: user.shirtNumber,
      },
    };

    this.update("Users", u);
  },
  updatePlayer(player) {
    const u = {
      id: player.id,
      fields: {
        player: player.player,
        rating: player.rating,
      },
    };
    this.update("Players", u);
  },
  update(table, item) {
    base(table).update([item], function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.get("name"));
      });
    });
  },
};
