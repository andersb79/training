import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import VideoControl from "./VideoControl";
import Box from "@material-ui/core/Box";
import { Image } from "cloudinary-react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

var Carousel = require("react-responsive-carousel").Carousel;

function ViewDrill2({ store, drill }) {
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      onChange(0);
    }, 1);
  });

  function onChange(index) {
    if (index < 0) {
      return;
    }

    console.log(drill);

    var media = drill.medias[index];

    if (!media) {
      return;
    }

    const videoElm = document.getElementById(media.id);

    const placeHolder = document.getElementById(drill.id);
    placeHolder.innerHTML = media.description;

    if (videoElm) {
      console.log("play");
      videoElm.play();
    }
  }

  return (
    <div>
      <div>
        <div className="back"></div>
        <div className="drill">
          <div>{drill.description}</div>

          <Carousel
            selectedItem={selectedItem}
            onChange={onChange}
            showThumbs={false}
            showArrows={true}
            showIndicators={drill.medias.length > 1}
            showStatus={drill.medias.length > 1}
          >
            {drill.medias.map((media) => (
              <div>
                {media.fileType === "mp4" && (
                  <VideoControl store={store} settings={media} />
                )}
                {(media.fileType === "jpg" || media.fileType === "gif") && (
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={media.src}
                  />
                )}
              </div>
            ))}
          </Carousel>
          <Box padding={2}>
            <Box textAlign="center" id={drill.id}></Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default observer(ViewDrill2);
