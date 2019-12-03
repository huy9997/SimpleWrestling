import React, { Component } from "react";
import Routes from "./routes";
import Footer from "./components/generalComponents/Footer";
class App extends Component {
  render() {
    let height = window.innerHeight;
    let width = window.innerWidth;

    let styles = {
        app: {
            height: height,
            width: width,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }
    }

    return (
      <div style={ styles.app }>
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
