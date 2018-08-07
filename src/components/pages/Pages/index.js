import React, { Component } from "react";
import "./styles.scss";

import { Card, CardBody } from "reactstrap";

class Pages extends Component {
  render(props) {
    return (
      <Card className="shadow-sm">
        <h2 className="page-heading p-3">
          <i className="nav-icon icon-note" /> Pages
        </h2>
      </Card>
    );
  }
}

export default Pages;
