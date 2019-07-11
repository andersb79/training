import { types } from "mobx-state-tree";
import Level from "./Level";
import Item from "./Item";

const LevelStore = types
  .model("LevelStore", {
    levels: types.array(Level),
    feeds: types.array(Item)
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
    processFile(file, level, onProcessed) {
      var formdata = new FormData();

      formdata.append("file", file);
      formdata.append("cloud_name", "deolievif");
      formdata.append("upload_preset", "kv0do7lj");
      formdata.append("resource_type", "raw");

      var xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        //"https://api.cloudinary.com/v1_1/deolievif/image/upload",
        "https://api.cloudinary.com/v1_1/deolievif/video/upload",
        true
      );

      xhr.onload = function() {
        // do something to response
        var myObj = JSON.parse(this.responseText);
        console.log(myObj);
        //level.setPublicId(myObj.public_id);
        console.log(this.responseText);

        self.add({
          level: self.levels.length + 1,
          name: "Toe Taps",
          details:
            "Keeping the ball stationary, tap the top of the ball with the soles of both feet",
          is_done: true,
          link: "https://www.youtube.com/embed/sARjTpHeA6w",
          publicId: "ychiextiddgz0gwluod2",
          category: "Beginner"
        });

        onProcessed(this.responseText);
      };
      xhr.send(formdata);
    }
  }));
export default LevelStore;
