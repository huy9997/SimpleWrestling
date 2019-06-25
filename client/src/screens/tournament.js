import React, { Component } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Card from "../components/generalComponents/card";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import ls from "local-storage";
import Modal from "react-modal";

const modalCustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      search: "",
      modal: false,
      modalWrestlerID: "",
      modalTournamentID: "",
      modalSeedingNotes: "",
      modalWeightClass: ""
    };
    this.searchOnchange = this.searchOnchange.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/getTournamentCardData/tournament")
      .then(tournamentCardData => {
        console.log(tournamentCardData.data, "component mount");
        this.setState({
          cards: tournamentCardData.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  searchOnchange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    axios
      .post("api/searchTournament", {
        search: this.state.search
      })
      .then(response => {
        this.setState({ cards: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  onchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onModalOpen = id => {
    const userID = ls.get("userInfo");
    console.log(userID[1], "userid ");
    this.setState({ modalTournamentID: id, modal: true });
  };
  onModalClose = e => {
    const userID = ls.get("userInfo");
    axios
      .post("api/tournamentSignUp", {
        seeding_names: this.state.modalSeedingNotes,
        tournament_weightclass: this.state.tournament_weightclass,
        userWrestler_id: userID[1],
        tournament_id: this.state.modalTournamentID
      })
      .then(response => {
        this.setState({ modal: false });
      })
      .catch(err => {
        // setup a alert
      });
    //post request for the wrestler sign up then closing out of the modal
  };
  onModalSubmit = e => {};

  render() {
    const {
      cards,
      search,
      modal,
      modalSeedingNotes,
      modalWeightClass
    } = this.state;
    return (
      <Container component="main" display="flex" flexdirection="column">
        <Box display="flex" flexdirection="row-reverse">
          <Button href="/createtournament"> Create Tournament</Button>
        </Box>
        <Input
          name="search"
          id="search"
          placeholder="search"
          onChange={e => this.searchOnchange(e)}
          value={search}
        />
        <Box display="flex" flexdirection="row" flexWrap="wrap">
          {cards.map(cardData => (
            <Box m={1} key={cardData.id}>
              <Card
                title={cardData.name}
                date={cardData.tournament_start_date}
                imgURL={
                  "https://s3.amazonaws.com/sidearm.sites/hawkeyesports.com/images/2018/3/20/180317NCAA0898.JPG"
                }
                onClick={this.onModalOpen}
                id={cardData.id}
              />
            </Box>
          ))}
        </Box>
        {modal && (
          <Modal
            style={modalCustomStyles}
            isOpen={modal}
            contentLabel="Wrestler Sign up"
          >
            <Typography component="h1" variant="h5">
              Wrestler Sign Up
            </Typography>
            <Box display="flex" flexDirection="column" m={2}>
              <Typography component="h4">
                Enter any seeding notes or major accomplishments:{" "}
              </Typography>
              <Input
                name="modalSeedingNotes"
                id="modalSeedingNotes"
                onChange={e => this.onchange(e)}
                value={modalSeedingNotes}
              />
              <Typography component="h4">
                Enter the a weight class you would like to compete in:
              </Typography>
              <Input
                name="modalWeightClass"
                id="modalWeightClass"
                onChange={e => this.onchange(e)}
                value={modalWeightClass}
              />
            </Box>
            <Button onClick={this.onModalClose}>Sign Up</Button>
          </Modal>
        )}
      </Container>
    );
  }
}
export default App;
