import React from "react";
import { observer } from "mobx-react";
import { Video } from "cloudinary-react";

function VideoControl({ store, level }) {
  function goFullScreen(level) {
    document.getElementById(level.id).webkitEnterFullscreen();
  }

  if (level.hasSharedPath) {
    return (
      <video
        onClick={() => goFullScreen(level)}
        id={level.publicId}
        autoPlay
        loop
        playsInline
        preload="none"
        muted
        width="100%"
        height="100%"
      >
        <source src={level.dropboxLink} type="video/mp4" />
      </video>
    );
  }

  return (
    <Video
      onClick={() => goFullScreen(level)}
      id={level.id}
      cloudName="deolievif"
      publicId={level.publicId}
      width="100%"
      height="100%"
      loop
      muted
      playsInline
      preload="none"
      poster={level.poster}
    />
  );
}

export default observer(VideoControl);
