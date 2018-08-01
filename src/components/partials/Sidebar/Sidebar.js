import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

import "./style.scss";

export default class Sidebar extends React.Component {
  render() {
    if (!this.props.isOpen) return null;

    return (
      <Nav vertical id="sidebar">
        <NavItem className="hvr-sweep-to-right">
          <NavLink to="/" className="nav-link">
            <i className="nav-icon icon-speedometer" />
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem className="hvr-sweep-to-right">
          <NavLink to="/admins" className="nav-link">
            <i className="nav-icon icon-user" />
            Admins
          </NavLink>
        </NavItem>
        <NavItem className="hvr-sweep-to-right">
          <NavLink to="/pages" className="nav-link">
            <i className="nav-icon icon-note" />
            Pages
          </NavLink>
        </NavItem>
        <NavItem className="hvr-sweep-to-right">
          <NavLink to="/media-library" className="nav-link">
            <i className="nav-icon icon-camera" />
            Media Library
          </NavLink>
        </NavItem>
        <NavItem className="hvr-sweep-to-right">
          <NavLink to="/reports" className="nav-link">
            <i className="nav-icon icon-book-open" />
            Reports
          </NavLink>
        </NavItem>
        <NavItem className="hvr-sweep-to-right">
          <NavLink to="/messages" className="nav-link">
            <i className="nav-icon icon-envelope-open" />
            Messages
          </NavLink>
        </NavItem>
        <NavItem className="hvr-sweep-to-right">
          <NavLink to="/settings" className="nav-link">
            <i className="nav-icon icon-settings" />
            Settings
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}
