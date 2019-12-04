import React, { Component } from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";

const faker = require("faker");

const Container = styled.div`
  display: inline-block;
  float: right;
  width: 30vw;
  border-left: groove 0.5px;
  height: 100vh;
`;

export default class AdContainer extends Component {
  constructor(props) {
    super(props);
    this.testAds = [];

    this.state = {
      listOfAds: []
    };
  }

  componentDidMount = () => {
    this.buildTestAds(10);
  }


  buildTestAds = thisNumber => {
    for (var i = 0; i < thisNumber; i++) {
      this.testAds.push(faker.name.findName());
    }
  };

  render() {
    return (
      <Container>
        <ul>
          {this.testAds.map(ad => {
            return <li>{ad}</li>
          })}
        </ul>
      </Container>
    );
  }
}
