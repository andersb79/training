import { types } from "mobx-state-tree";
import Level from "./Level";
import Item from "./Item";

const LevelStore = types
  .model("LevelStore", {
    levels: types.array(Level),
    items: types.array(Item)
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
    addItem(item) {
      self.items.push(item);
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

        self.addItem({
          userName: "GustavK10q",
          publicId: myObj.public_id
        });

        console.log(self.items);

        onProcessed(this.responseText);
      };
      xhr.send(formdata);
    }
  }));
export default LevelStore;
