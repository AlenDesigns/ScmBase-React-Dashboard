import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container
} from "reactstrap";

// Pages
import Admins from "./pages/Admins";
import Home from "./pages/Home";
import MediaLibrary from "./pages/MediaLibrary";
import Messages from "./pages/Messages";
import Pages from "./pages/Pages";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

// 404
import NotFound from "./pages/NotFound";

class Main extends Component {
  render() {
    return (
      <Container fluid={true} className="mt-3">
        <Card>
          <CardBody>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/admins" component={Admins} />
              <Route path="/media-library" component={MediaLibrary} />
              <Route path="/messages" component={Messages} />
              <Route path="/pages" component={Pages} />
              <Route path="/reports" component={Reports} />
              <Route path="/settings" component={Settings} />
              <Route component={NotFound} />
            </Switch>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default Main;
