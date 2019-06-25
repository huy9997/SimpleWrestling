import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TournamentSignUp from "./tournamentSignUp";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 80
  },
  paper: {
    position: "absolute",
    backgroundColor: "blue",
    width: 400,
    outline: "none"
  }
});

const tournamentCard = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <Button size="small" color="primary" onClick={handleOpen}>
          Sign Up
        </Button>

        <Modal open={open} className={classes.paper} onClose={handleClose}>
          <Typography variant="h6">Modal</Typography>
        </Modal>
      </CardActions>
    </Card>
  );
};

export default tournamentCard;
