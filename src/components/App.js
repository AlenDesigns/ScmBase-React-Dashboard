import React, { Component } from 'react';

// Partials
import Dashboard from './partials/Dashboard/Dashboard';
import Sidebar from './partials/Sidebar/Sidebar';


// Layout
import { Container } from 'reactstrap';
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
        <main className="layout">
          <Sidebar isOpen={this.state.dashOpen} /> 
          <Main />    
        </main>       
           
      </Container>
    );
  }
}

export default App;
