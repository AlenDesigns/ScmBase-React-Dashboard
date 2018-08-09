import React from "react";
import { Nav, NavItem } from "reactstrap";
import { Switch, Route, NavLink } from "react-router-dom";

// Styles
import "./style.scss";

export default class TabNav extends React.Component {
  render() {
    return (
      <Nav vertical className="tabnav" id="tabnav">
        <NavItem>
          <Switch>
            <Route
              path="/dashboard"
              render={({ match }) => (
                <React.Fragment>
                  <NavLink
                    className="nav-link tab-nav-link-text"
                    to={`${match.url}/sub1`}
                  >
                    Dashboard subcard 1
                  </NavLink>
                  <NavLink
                    className="nav-link tab-nav-link-text"
                    to={`${match.url}/sub2`}
                  >
                    Dashboard subcard 2
                  </NavLink>
                  <NavLink
                    className="nav-link tab-nav-link-text"
                    to={`${match.url}/sub3`}
                  >
                    Dashboard subcard 3
                  </NavLink>
                </React.Fragment>
              )}
            />
            <Route
              path="/admins"
              render={({ match }) => (
                <React.Fragment>
                  <NavLink className="nav-link" to={`${match.url}/sub1`}>
                    admins subcard 1
                  </NavLink>
                  <NavLink className="nav-link" to={`${match.url}/sub2`}>
                    admins subcard 2
                  </NavLink>
                  <NavLink className="nav-link" to={`${match.url}/sub3`}>
                    admins subcard 2
                  </NavLink>
                </React.Fragment>
              )}
            />
            <Route
              path="/pages"
              render={({ match }) => (
                <React.Fragment>
                  <NavLink className="nav-link" to={`${match.url}/sub1`}>
                    pages subcard 1
                  </NavLink>
                  <NavLink className="nav-link" to={`${match.url}/sub2`}>
                    pages subcard 2
                  </NavLink>
                </React.Fragment>
              )}
            />
          </Switch>
        </NavItem>
      </Nav>
    );
  }
}
