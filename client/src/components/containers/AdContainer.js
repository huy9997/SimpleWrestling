import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: inline-block;
    float: right;
    width: 30vw;
    height: 50vh;
    border-left: solid 0.5px;
    margin-top: 15px;
`;

export default class AdContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfAds: []
    };
  }

  render() {
    return <Container />;
  }
}
