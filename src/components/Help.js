import React from "react";
import { observer } from "mobx-react";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import VideoIcon from "@material-ui/icons/VideoCall";
import PersonIcon from "@material-ui/icons/Person";
import TabletIcon from "@material-ui/icons/Tablet";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

function Help({ store }) {
  function update() {
    document.location.reload();
  }

  function startColor(count) {
    store.setColorCount(count);
    store.setRunningApp("COLOR");
  }

  return (
    <Paper className="help">
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
        <Typography paragraph>10 lätta övningar, 5 poäng var</Typography>
        <Typography paragraph>5 medium övningar, 10 poäng var</Typography>
        <Typography paragraph>5 svåra övningar, 20 poäng var</Typography>
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
          Varje säsong består av maximalt 200 poäng. Här visas vem som fått
          flest poäng.
        </Typography>
      </div>

      <Typography variant="h6" paragraph>
        <PersonIcon /> Profil
      </Typography>

      <div style={{ margin: "10px" }}>
        <Typography paragraph>
          Här kan du ladda upp din profilbild och andra användarinställningar.
        </Typography>
      </div>

      <Typography variant="h6" paragraph>
        <TabletIcon /> Verktyg
      </Typography>

      <Button variant="outlined" onClick={() => store.setRunningApp("NUMBER")}>
        Nummer
      </Button>

      <Button variant="outlined" onClick={() => startColor(2)}>
        Color 2 färger
      </Button>

      <Button variant="outlined" onClick={() => startColor(4)}>
        Color 4 färger
      </Button>

      <Typography paragraph>
        Om det finns nya uppdateringar kan du uppdatera här.
      </Typography>

      <Button variant="outlined" onClick={update}>
        Uppdatera appen
      </Button>
    </Paper>
  );
}

export default observer(Help);
