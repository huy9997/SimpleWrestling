import React, { Component } from "react";
import axios from "axios";
import Carousel from "../components/generalComponents/Carousel";
import Container from "@material-ui/core/Container";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    axios
      .get("/getTournamentCardData")
      .then(tournamentCard => {
        this.setState({
          cards: require("../test/fakerData.json")
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <div style={{ padding: 40, backgroundColor: "#3f51b5", width: "40%", alignItems: 'center' }}>
          <Carousel />
        </div>
        <div>

        </div>
      </>
    );
  }
}

export default App;
