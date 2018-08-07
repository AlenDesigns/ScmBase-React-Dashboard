import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

// Styles
import "./style.scss";

export default class TabNav extends React.Component {
  render() {
    return (
      <Nav vertical className="tabnav">
        <NavItem>
          <NavLink to="/pages/new" className="nav-link">
            Add new
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}
