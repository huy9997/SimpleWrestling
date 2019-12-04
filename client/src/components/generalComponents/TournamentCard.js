import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: "100%"
  }
});

const TournamentCard = props => {
  const image = props.imgURL;
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Tournament picture"
            height="300"
            width="80%"
            component="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h7" component="h2">
              {props.title}
            </Typography>
            <Typography gutterBottom variant="h10">
              {props.date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              console.log("Go somewhere");
            }}
          >
            Sign Up
          </Button>
          <Button
            size="small"
            color="primary"
            to={{
              pathname: "/tournamentBracket",
              state: {
                tournamentID: props.tournamentID
              }
            }}
          >
            Brackets
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default TournamentCard;
