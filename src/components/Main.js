import React, { Component } from 'react';

import {
    Col
} from 'reactstrap';

import {
    Route, Switch 
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Pages from './pages/Pages';


class Main extends Component {
    render() { 
        return (  
         <Col sm="12" md="10" id="content">
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pages" component={Pages} />
              </Switch>
            </main> 
          </Col>
        );
    }
}
 
export default Main;