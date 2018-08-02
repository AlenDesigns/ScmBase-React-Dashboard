import React, { Component } from "react";
import "./styles.scss";

import { Card, CardBody } from "reactstrap";

class Pages extends Component {
  render(props) {
    return (
      <Card>
        <h2 className="page-heading p-3">
          <i className="nav-icon icon-note" /> Pages
        </h2>
        <CardBody className="shadow-sm">
          <p>Welcome to Pages page!</p>
        </CardBody>
      </Card>
    );
  }
}

export default Pages;
