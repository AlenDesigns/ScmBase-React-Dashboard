import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
      <Navbar color="light" light expand="md" className="dashboard">
        <button className="main-toggler" onClick={this.props.toggleSidebar}>
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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
