import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Image, Video } from "cloudinary-react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function ProfileReadOnly({ store }) {
  return (
    <div>
      <ArrowBackIosIcon onClick={() => store.selectProfile()} />{" "}
      {store.selectedProfile.name}
      <Image
        cloudName="deolievif"
        publicId={store.selectedProfile.profileImage}
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default observer(ProfileReadOnly);
