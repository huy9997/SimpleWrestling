import React, { Component } from "react";
import axios from "axios";
import Card from "../components/generalComponents/card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: {
        card: {
          date: Date,
          title: "",
          picture: ""
        }
      }
    };
  }
  componentDidMount() {
    axios.get();
  }
  render() {
    return (
      <div>
        <Card />
      </div>
    );
  }
}
export default App;
