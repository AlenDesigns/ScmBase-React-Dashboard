import React, { Component } from "react";
import "./styles.scss";

import { Card, CardBody } from "reactstrap";

export class Reports extends Component {
  render() {
    return (
      <Card>
        <h2 className="page-heading p-3">
          <i className="nav-icon icon-book-open" /> Reports
        </h2>
        <CardBody className="shadow-sm">
          <p>Welcome to Reports page!</p>
        </CardBody>
      </Card>
    );
  }
}

export default Reports;
