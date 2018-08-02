import React, { Component } from "react";
import "./styles.scss";

import { Card, CardBody } from "reactstrap";

export class Settings extends Component {
  render() {
    return (
      <Card>
        <h2 className="page-heading p-3">
          <i className="nav-icon icon-settings" /> Settings
        </h2>
        <CardBody className="shadow-sm">
          <p>Welcome to Settings page!</p>
        </CardBody>
      </Card>
    );
  }
}

export default Settings;
