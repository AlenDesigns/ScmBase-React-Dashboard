import React, { Component } from "react";

import { Route, Switch, NavLink } from "react-router-dom";

import { Container } from "reactstrap";

// Pages
import Admins from "./pages/Admins";
import Home from "./pages/Home";
import MediaLibrary from "./pages/MediaLibrary";
import Messages from "./pages/Messages";
import Pages from "./pages/Pages";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import AddPage from "./pages/Pages/AddPage";

// 404
import NotFound from "./pages/NotFound";

import { TransitionGroup, CSSTransition } from "react-transition-group";

class Main extends Component {
  render() {
    return (
      <Container fluid={true} style={{ padding: 0 }}>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={200}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={({ match }) => (
                      <NavLink to={`${match.url}/test`}>ASD</NavLink>
                    )}
                  />
                  <Route
                    exact
                    path="/admins/test"
                    render={({ match }) => <h1>TEST</h1>}
                  />
                  <Route exact path="/media-library" component={MediaLibrary} />
                  <Route exact path="/messages" component={Messages} />
                  <Route exact path="/pages" component={Pages} />
                  <Route exact path="/reports" component={Reports} />
                  <Route exact path="/settings" component={Settings} />

                  <Route path="/pages/new" component={AddPage} />

                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Container>
    );
  }
}

export default Main;
