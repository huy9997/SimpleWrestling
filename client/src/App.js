import React, { Component } from "react";
import Routes from "./routes";
import Footer from "./components/generalComponents/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

import "./App.css";
class App extends Component {
  render() {
    let height = window.innerHeight;
    let width = window.innerWidth;

    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
