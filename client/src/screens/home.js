import React, { Component } from "react";
import axios from "axios";
import Carousel from "../components/generalComponents/Carousel";
import Container from "@material-ui/core/Container";
import Footer from "../components/generalComponents/Footer";
import AdContainer from "../components/containers/AdContainer";

let height = window.innerHeight;
let reference = React.createRef();

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
        <div style={{ height: "65vh"}}>
          <div style={styles.carousel} id="carousel">
            <Carousel />
          </div>
          <div style={styles.adContainer}>
            <AdContainer/>
          </div>
        </div>

      </div>
    );
  }
}

const styles = {
  view: {
    height: height
  },
  carousel: {
    display: "inline-block",
    padding: 40,
    backgroundColor: "#3f51b5",
    width: "50%",
    height: "auto",
    alignItems: "center"
  },
    adContainer: {
      display: "inline-block",
      float: "right",
      height: "100vh"
    }
};

export default App;
