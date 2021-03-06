import React, { Component } from "react";

// Partials
import Dashboard from "./partials/Dashboard/Dashboard";
import Sidebar from "./partials/Sidebar/Sidebar";

// Layout
import { Container } from "reactstrap";
import Main from "./Main";
import TabNav from "./partials/TabNav/TabNav";

// Particles
import Particles from "./partials/Particles";

// Animations
import { CSSTransition } from "react-transition-group";

// Global styles
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dashOpen: true,
      tabOpen: true
    };

    this.handleSidebarToggle = this.handleSidebarToggle.bind(this);
  }

  handleSidebarToggle() {
    this.setState(prevState => ({
      dashOpen: !prevState.dashOpen
    }));
  }

  render() {
    return (
      <Container id="app" className="App m-0 p-0" fluid={true}>
        <Dashboard toggleSidebar={this.handleSidebarToggle} />
        <div className="layout">
          <CSSTransition
            in={this.state.dashOpen}
            timeout={250}
            classNames="sidebar"
          >
            <Sidebar dashOpen={this.state.dashOpen} />
          </CSSTransition>
          <CSSTransition
            in={this.state.tabOpen}
            timeout={300}
            classNames="tabnav"
          >
            <TabNav />
          </CSSTransition>

          <Main />
        </div>

        <Particles />
      </Container>
    );
  }
}

export default App;
