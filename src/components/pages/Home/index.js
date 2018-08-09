import React, { Component } from "react";
import "./styles.scss";

import Particles from "react-particles-js";
import ParticlesConfig from "./particles";

class Home extends Component {
  componentDidMount = () => {
    console.log(ParticlesConfig);
  };

  render() {
    return (
      <Particles params={ParticlesConfig} className="full-height-particles" />
    );
  }
}

export default Home;
