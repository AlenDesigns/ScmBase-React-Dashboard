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
            {dashOpen && "Dashboard"}
          </NavLink>
        </NavItem>
        <NavItem className="hvr-bounce-to-right">
          <NavLink to="/admins" className="nav-link">
            <i className="nav-icon icon-user" />
            {dashOpen && "Admins"}
          </NavLink>
        </NavItem>
        <NavItem className="hvr-bounce-to-right">
          <NavLink to="/pages" className="nav-link">
            <i className="nav-icon icon-note" />
            {dashOpen && "Pages"}
          </NavLink>
        </NavItem>
        <NavItem className="hvr-bounce-to-right">
          <NavLink to="/media-library" className="nav-link">
            <i className="nav-icon icon-camera" />
            {dashOpen && "Media Library"}
          </NavLink>
        </NavItem>
        <NavItem className="hvr-bounce-to-right">
          <NavLink to="/reports" className="nav-link">
            <i className="nav-icon icon-book-open" />
            {dashOpen && "Reports"}
          </NavLink>
        </NavItem>
        <NavItem className="hvr-bounce-to-right">
          <NavLink to="/messages" className="nav-link">
            <i className="nav-icon icon-envelope-open" />
            {dashOpen && "Messages"}
          </NavLink>
        </NavItem>
        <NavItem className="hvr-bounce-to-right">
          <NavLink to="/settings" className="nav-link">
            <i className="nav-icon icon-settings" />
            {dashOpen && "Settings"}
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}
