import React, { Component } from "react";
import "./styles.scss";

import { Card, CardBody } from "reactstrap";

export class MediaLibrary extends Component {
  render() {
    return (
      <Card>
        <h2 className="page-heading p-3">
          <i className="nav-icon icon-camera" /> Media Library
        </h2>
        <CardBody className="shadow-sm">
          <p>Welcome to Media Library page!</p>
        </CardBody>
      </Card>
    );
  }
}

export default MediaLibrary;
