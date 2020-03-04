import React from "react";
import { observer } from "mobx-react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import VideoControl from "./VideoControl";
import { Image } from "cloudinary-react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

var Carousel = require("react-responsive-carousel").Carousel;

function ViewDrill({ store, onBack }) {
  const level = store.selectedDrill;
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
                {media.description && (
                  <p className="legend">{media.description}</p>
                )}
              </div>
            ))}
          </Carousel>

          <div className="desc">Setup</div>
          <div className="drill-desc">{level.details}</div>
          <div className="desc">Spelare</div>
          <div className="drill-desc">
            {level.minPlayers}-{level.maxPlayers}
          </div>
          <div className="desc">Organisation</div>
          <div className="drill-desc">{level.organisation}</div>
        </div>
      </div>
    </div>
  );
}

export default observer(ViewDrill);
