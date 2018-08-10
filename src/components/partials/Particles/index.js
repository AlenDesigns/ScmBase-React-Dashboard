import React, { Component } from "react";
import "./styles.scss";

import Particles from "react-particles-js";
import ParticlesConfig from "./particles";

class Home extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentDidMount = () => {
    console.log(ParticlesConfig);
  };

  render() {
    return (
      <Particles
        params={ParticlesConfig}
        className="full-height-particles background"
      />
    );
  }
}

export default Home;
