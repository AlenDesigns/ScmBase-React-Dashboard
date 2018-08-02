import React, { Component } from "react";
import "./styles.scss";

import { Card, CardBody } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <Card>
        <h2 className="page-heading p-3">
          <i className="nav-icon icon-speedometer" /> Home
        </h2>
        <CardBody className="shadow-sm">
          <p>Welcome to React Dashboard!</p>
        </CardBody>
      </Card>
    );
  }
}

export default Home;
