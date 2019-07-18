import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Image, Video } from "cloudinary-react";
import ImageIcon from "@material-ui/icons/Image";
import Button from "@material-ui/core/Button";

function Profile({ store, onLogout }) {
  function processFile(e, level) {
    var file = e.target.files[0];

    store.uploadImage(file, text => {});
  }

  function logout() {
    window.localStorage.removeItem("loggedIn");
    onLogout();
  }

  function update() {
    document.location.reload();
  }

  return (
    <>
      <div className="profile">
        {store.loggedIn.name}
        <Image
          cloudName="deolievif"
          publicId={store.loggedIn.profileImage}
          width="100%"
          height="100%"
        />
        <div className="fileinputs">
          <input type="file" className="file" onChange={e => processFile(e)} />
          <div className="fakefile">
            <Button variant="outlined">
              Ladda upp <ImageIcon />
            </Button>
          </div>
        </div>
      </div>
      <br />
      <div>
        <Button variant="outlined" onClick={update}>
          Uppdatera
        </Button>
      </div>
      <br />
      <div>
        <Button variant="outlined" onClick={logout}>
          Logga ut
        </Button>
      </div>
    </>
  );
}

export default observer(Profile);
