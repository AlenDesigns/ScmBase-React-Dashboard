import React, { Component } from 'react';

import {
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Pages from './pages/Pages';

// Partials
import Dashboard from './partials/Dashboard/Dashboard';
import Sidebar from './partials/Sidebar/Sidebar';


// Layout
import { Container, Row, Col } from 'reactstrap';

// Global styles
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dashOpen: true
    };

    this.handleDashboardToggle = this.handleDashboardToggle.bind(this)
  }

  handleDashboardToggle(val) {
    this.setState({ dashOpen: val });
  }

  render() {
    return (
      <Container id="app" className="App m-0 p-0" fluid={true}>
        <Dashboard />            
        <Row className="p-0 m-0">
          <Col sm="12" md="2" id="sidebar" className="m-0">
            <Sidebar isOpen={this.state.dashOpen}  /> 
          </Col>
          <Col sm="12" md="10" id="content">
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pages" component={Pages} />
              </Switch>
            </main> 
          </Col>
        </Row>       
      </Container>
    );
  }
}

export default App;
