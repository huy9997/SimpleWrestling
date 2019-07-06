import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 80
  }
});

const tournamentCard = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imgURL}
          title="Tournament picture"
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
            props.onClick(props.id);
          }}
        >
          Sign Up
        </Button>
        <Link
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
        </Link>
      </CardActions>
    </Card>
  );
};

export default tournamentCard;
