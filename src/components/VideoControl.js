import React from "react";
import { observer } from "mobx-react";
import { Video } from "cloudinary-react";
import YouTube from "react-youtube";

function VideoControl({ store, settings }) {
  function goFullScreen(settings) {
    document.getElementById(settings.id).webkitEnterFullscreen();
  }

  return (
    <video
      onClick={() => goFullScreen(settings)}
      id={settings.id}
      loop
      playsInline
      preload="none"
      muted
      width="100%"
      height="100%"
      poster={settings.dropboxPoster}
    >
      <source src={settings.dropboxLink} type="video/mp4" />
    </video>
  );
}

export default observer(VideoControl);
