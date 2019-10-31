import React from "react";
import { observer } from "mobx-react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import VideoControl from "./VideoControl";
import { Image } from "cloudinary-react";

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
            level.hasSharedPath && <img src={level.src} />}

          {(level.fileType === "jpg" || level.fileType === "gif") &&
            !level.hasSharedPath && (
              <Image
                cloudName="deolievif"
                publicId={level.publicId}
                width="100%"
                height="100%"
              />
            )}
          <div className="desc">Setup</div>
          <div className="desc">{level.details}</div>
          <div>{level.minPlayers}</div>
          <div>{level.maxPlayers}</div>
        </div>
      </div>
    </div>
  );
}

export default observer(ViewDrill);