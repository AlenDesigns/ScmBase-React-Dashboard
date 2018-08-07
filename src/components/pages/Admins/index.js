import React, { Component } from "react";
import "./styles.scss";

import { Card, CardBody } from "reactstrap";

export class Admins extends Component {
  render() {
    return (
      <div className="p-2">
        <h2 className="page-heading p-3">
          <i className="nav-icon icon-user" /> Admins
        </h2>
        <p>Welcome to admins page!</p>
      </div>
    );
  }
}

export default Admins;
