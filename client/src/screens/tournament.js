import React, { Component } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Card from "../components/generalComponents/card";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      search: ""
    };
  }
  onchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    axios
      .get("/api/getTournamentCardData/tournament")
      .then(tournamentCardData => {
        this.setState({
          cards: tournamentCardData.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { cards, search } = this.state;
    return (
      <Container component="main" display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row-reverse">
          <Button href="/createtournament"> Create Tournament</Button>
        </Box>
        <Input
          placeholder="search"
          onChange={e => this.onchange(e)}
          value={search}
        />
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          {cards.map(props => (
            <Box m={1}>
              <Card
                title={props.name}
                date={props.tournament_start_date}
                imgURL={
                  "https://s3.amazonaws.com/sidearm.sites/hawkeyesports.com/images/2018/3/20/180317NCAA0898.JPG"
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
    );
  }
}
export default App;
