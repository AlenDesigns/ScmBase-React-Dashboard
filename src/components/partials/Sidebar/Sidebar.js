import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

import "./style.scss";

export default class Sidebar extends React.Component {
  render() {
    /*if (!this.props.isOpen) return null;*/
    const { dashOpen } = this.props;
    return (
      <Nav vertical id="sidebar">
        <NavItem className="hvr-bounce-to-right">
          <NavLink to="/dashboard" className="nav-link">
            <i className="nav-icon icon-speedometer" />
            <span className="nav-link-text">Dashboard</span>
          </NavLink>
        </NavItem>
        <NavItem className="hvr-bounce-to-right">
          <NavLink to="/admins" className="nav-link">
            <i className="nav-icon icon-user" />
            <span className="nav-link-text">Admins</span>
          </NavLink>
        </NavItem>
        <NavItem className="hvr-bounce-to-right">
          <NavLink to="/pages" className="nav-link">
            <i className="nav-icon icon-note" />
            <span className="nav-link-text">Pages</span>
          </NavLink>
        </NavItem>
        <NavItem className="hvr-bounce-to-right">
          <NavLink to="/media-library" className="nav-link">
            <i className="nav-icon icon-camera" />
            <span className="nav-link-text">Media Library</span>
          </NavLink>
        </NavItem>
        <NavItem className="hvr-bounce-to-right">
          <NavLink to="/reports" className="nav-link">
            <i className="nav-icon icon-book-open" />
            <span className="nav-link-text">Reports</span>
          </NavLink>
        </NavItem>
        <NavItem className="hvr-bounce-to-right">
          <NavLink to="/messages" className="nav-link">
            <i className="nav-icon icon-envelope-open" />
            <span className="nav-link-text">Messages</span>
          </NavLink>
        </NavItem>
        <NavItem className="hvr-bounce-to-right">
          <NavLink to="/settings" className="nav-link">
            <i className="nav-icon icon-settings" />
            <span className="nav-link-text">Settings</span>
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}
