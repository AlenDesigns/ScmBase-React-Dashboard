import React, { Component } from "react";
import "./styles.scss";

import { Card, CardBody } from "reactstrap";

export class Messages extends Component {
  render() {
    return (
      <Card>
        <h2 className="page-heading p-3">
          <i className="nav-icon icon-envelope-open" /> Messages
        </h2>
        <CardBody className="shadow-sm">
          <p>Welcome to Messages page!</p>
        </CardBody>
      </Card>
    );
  }
}

export default Messages;
