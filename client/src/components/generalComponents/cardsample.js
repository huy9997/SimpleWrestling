import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 80
  },
  paper: {
    background: "#eee",
    position: "fixed",
    top: "50%",
    left: "50%",
    outline: "none",
    width: "30%",
    height: "30%"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      password: "",
      loginRedirect: false
    };
  }
  render() {
    const classes = useStyles();
    const handleOpen = () => {
      this.setState({ modalOpen: true });
    };

    const handleClose = () => {
      this.setState({ modalOpen: false });
    };
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={this.props.imgURL}
            title="Tournament picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h7" component="h2">
              {this.props.title}
            </Typography>
            <Typography gutterBottom variant="h10">
              {this.props.date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleOpen}>
            Sign Up
          </Button>

          <Modal
            open={handleOpen}
            className={classes.paper}
            onClose={handleClose}
          >
            <Typography variant="h6">Modal</Typography>
          </Modal>
        </CardActions>
      </Card>
    );
  }
}

export default App;
