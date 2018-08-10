import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import "./style.scss";
import Logo from "../../../assets/logo.png";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar light expand="md" className="dashboard">
        <button
          className="main-toggler hvr-bounce-in"
          onClick={this.props.toggleSidebar}
        >
          <i className="icon icon-menu" />
        </button>
        <NavbarBrand href="/">
          <img src={Logo} width="100" alt="Company logo" />
        </NavbarBrand>

        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/settings">
                <i className="icon icon-settings" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/notifications">
                <i className="icon icon-bell" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/messages">
                <i className="icon icon-envelope" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
