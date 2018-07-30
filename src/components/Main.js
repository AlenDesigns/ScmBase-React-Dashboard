import React, { Component } from 'react';


import {
    Route, Switch 
} from 'react-router-dom';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container } from 'reactstrap';


// Pages
import Home from './pages/Home';
import Pages from './pages/Pages';
import AddPage from './pages/Pages/AddPage';


class Main extends Component {
    render() { 
        return (  
            <Container fluid={true}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pages" component={Pages} />
                <Route exact path="/page/add" component={AddPage} />
              </Switch>
            </Container> 
        );
    }
}
 
export default Main;