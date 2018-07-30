import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './style.scss';

export default class Sidebar extends React.Component {
 
  render() {
    if(!this.props.isOpen)
      return null;
      
    return (
        <Nav vertical id="sidebar">
         <NavItem>
            <NavLink to="/" className="nav-link">
              <i className="nav-icon icon-speedometer"></i>
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admins" className="nav-link">
              <i className="nav-icon icon-user"></i>
              Admins
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/pages" className="nav-link">
              <i className="nav-icon icon-note"></i>
              Pages
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/media-library" className="nav-link">
              <i className="nav-icon icon-camera"></i>
              Media Library
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/reports" className="nav-link">
              <i className="nav-icon icon-book-open"></i>
              Reports
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/messages" className="nav-link">
              <i className="nav-icon icon-envelope-open"></i>
              Messages
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/settings" className="nav-link">
              <i className="nav-icon icon-settings"></i>
              Settings
            </NavLink>
          </NavItem>
         
        </Nav>
    );
  }
}