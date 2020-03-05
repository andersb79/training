import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import VideoControl from "./VideoControl";
import Box from "@material-ui/core/Box";
import { Image } from "cloudinary-react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

var Carousel = require("react-responsive-carousel").Carousel;

function ViewDrill({ store, onBack }) {
  const level = store.selectedDrill;
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

    var media = store.selectedDrill.medias[index];

    const videoElm = document.getElementById(media.id);

    const placeHolder = document.getElementById("legend");
    placeHolder.innerHTML = media.description;

    if (videoElm) {
      console.log("play");
      videoElm.play();
    }
  }

  return (
    <div className="game">
      <div>
        <div className="back">
          <div className="left">
            <ArrowBackIosIcon onClick={() => store.selectDrill()} />
          </div>
          <div className="right">{store.selectedCategory.name}</div>
        </div>
        <div className="drill">
          <div>{store.selectedDrill.name}</div>

          <Carousel
            selectedItem={selectedItem}
            onChange={onChange}
            showThumbs={false}
            showArrows={true}
            showIndicators={level.medias.length > 1}
            showStatus={level.medias.length > 1}
          >
            {level.medias.map(media => (
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
            <Box textAlign="center" id="legend"></Box>
            <Box fontWeight="fontWeightBold">Setup</Box>
            <Box className="drill-desc">{level.details}</Box>
            <Box fontWeight="fontWeightBold">Spelare</Box>
            <Box className="drill-desc">
              {level.minPlayers}-{level.maxPlayers}
            </Box>
            <Box fontWeight="fontWeightBold">Organisation</Box>
            <Box className="drill-desc">{level.organisation}</Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default observer(ViewDrill);
