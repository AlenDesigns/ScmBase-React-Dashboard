import React, { Component } from "react";

import { Card, CardBody } from "reactstrap";

export class NotFound extends Component {
  render() {
    return (
      <Card>
        <h2 className="page-heading p-3">404!</h2>
        <CardBody className="shadow-sm">
          <p>Page not found!</p>
        </CardBody>
      </Card>
    );
  }
}

export default NotFound;
