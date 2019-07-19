import React from "react";
import { observer } from "mobx-react";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import VideoIcon from "@material-ui/icons/VideoCall";

function Help({ store }) {
  return (
    <div className="help">
      <Typography paragraph>Säsong 1:</Typography>

      <Typography paragraph>Varje säsong har 20 utmaningar.</Typography>

      <Typography variant="h6" paragraph>
        <HomeIcon /> Hem
      </Typography>

      <div style={{ margin: "10px" }}>
        <Typography paragraph>
          Här visas flödet med alla säsongens användaruppladde filmer.
        </Typography>
        <Typography paragraph>
          <AccountCircleIcon />
          Under utvärdering för att se om man klarat det.
        </Typography>
        <Typography paragraph>
          <StarIcon />
          Klarad utmaning
        </Typography>
        <Typography paragraph>
          <ThumbDownIcon />
          Utmaning misslyckad. Bara att försöka igen. Kanske hade du inte flytet
          i utmaningen, eller missförtått något. Kontrollera videon och
          instruktionerna och försök igen.
        </Typography>
        <Typography paragraph>
          Om du klickar på personens namn så kan du se profilen.
        </Typography>
        <Typography paragraph>
          Klicka på videon för att se den i helskärm.
        </Typography>
      </div>

      <Typography variant="h6" paragraph>
        <StarIcon /> Utmaningar
      </Typography>

      <div style={{ margin: "10px" }}>
        <Typography paragraph>
          Här visas flödet med alla säsongens utmaningar. Det finns 3 olika
          nivåer. Lätt, medium, svår.
        </Typography>
        <Typography paragraph>
          <VideoIcon />
          Klicka på denna för att ladda upp en film. Filma alltid i horisontellt
          läge.
        </Typography>
      </div>

      <Typography variant="h6" paragraph>
        <StarIcon /> Topplistan
      </Typography>

      <div style={{ margin: "10px" }}>
        <Typography paragraph>
          Varje säsong består av maximalt 200 poäng.
        </Typography>
      </div>
    </div>
  );
}

export default observer(Help);
