import React, { Component } from 'react';

import {
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';


// Partials
import Dashboard from './partials/Dashboard/Dashboard';
import Sidebar from './partials/Sidebar/Sidebar';


// Layout
import { Container, Row, Col, Collapse } from 'reactstrap';
import Main from './Main';

// Global styles
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dashOpen: true
    };

    this.handleSidebarToggle = this.handleSidebarToggle.bind(this)
  }

  handleSidebarToggle() {
    this.setState(prevState =>({
      dashOpen: !prevState.dashOpen
    }));
  }

  render() {
    return (
      <Container id="app" className="App m-0 p-0" fluid={true}>
        <Dashboard toggleSidebar={this.handleSidebarToggle} />            
        <Row className="p-0 m-0">       
          <Sidebar isOpen={this.state.dashOpen} /> 
          <Main />
        </Row>       
      </Container>
    );
  }
}

export default App;
