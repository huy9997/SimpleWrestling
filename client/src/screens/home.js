import React, { Component } from "react";
import axios from "axios";
import Carousel from "../components/generalComponents/Carousel";
import Container from "@material-ui/core/Container";
import Footer from "../components/generalComponents/Footer";
import AdContainer from "../components/containers/AdContainer";
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
      <div style={styles.view}>
        <div
          style={{
            padding: 40,
            backgroundColor: "#3f51b5",
            width: "40%",
            alignItems: "center"
          }}
        >
          <Carousel />
        </div>
        <div>
          <AdContainer />
        </div>
      </div>
    );
  }
}

const styles = {
  view: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
};

export default App;
