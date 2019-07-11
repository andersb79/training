import { types } from "mobx-state-tree";
import Level from "./Level";

const LevelStore = types
  .model("LevelStore", {
    levels: types.array(Level)
  })
  .views(self => ({
    get test() {
      return "testing";
    }
  }))
  .actions(self => ({
    add(level) {
      self.levels.push(level);
    },
    processFile(file, onProcessed) {
      var formdata = new FormData();

      formdata.append("file", file);
      formdata.append("cloud_name", "deolievif");
      formdata.append("upload_preset", "kv0do7lj");
      formdata.append("resource_type", "raw");

      var xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://api.cloudinary.com/v1_1/deolievif/video/upload",
        true
      );

      xhr.onload = function() {
        // do something to response

        console.log(this.responseText);
        onProcessed(this.responseText);
      };
      xhr.send(formdata);
    }
  }));
export default LevelStore;
