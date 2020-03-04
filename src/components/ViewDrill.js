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
          {level.fileType === "mp4" && (
            <VideoControl store={store} settings={level} />
          )}
          {(level.fileType === "jpg" || level.fileType === "gif") &&
            level.hasSharedPath && (
              <img style={{ width: "100%", height: "100%" }} src={level.src} />
            )}

          {/* {(level.fileType === "jpg" || level.fileType === "gif") &&
            !level.hasSharedPath && (
              <Image
                cloudName="deolievif"
                publicId={level.publicId}
                width="100%"
                height="100%"
              />
            )} */}
          <div className="desc">Setup</div>
          <div className="drill-desc">{level.details}</div>
          <div className="desc">Spelare</div>
          <div className="drill-desc">
            {level.minPlayers}-{level.maxPlayers}
          </div>
          <div className="desc">Organisation</div>
          <div className="drill-desc">{level.organisation}</div>
          {/* {level.medias.map(media => (
            <>{media.sharedPath}</>
          ))} */}
          <Carousel showThumbs={false} showArrows={true}>
            <div>
              <img className="login-img" src="0.jpg" alt="Träningar" />
            </div>
            <div>
              <img className="login-img" src="0.jpg" alt="Träningar" />
            </div>
            <div>
              <img className="login-img" src="0.jpg" alt="Träningar" />
            </div>
            <div>
              <img className="login-img" src="0.jpg" alt="Träningar" />
            </div>
            <div>
              <img className="login-img" src="0.jpg" alt="Träningar" />
            </div>
            <div>
              <img className="login-img" src="0.jpg" alt="Träningar" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default observer(ViewDrill);
