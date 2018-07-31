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
            <Container fluid={true} className="mt-3">
              <Card>
                  <CardBody>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/pages" component={Pages} />
                        <Route exact path="/page/add" component={AddPage} />
                    </Switch>
                  </CardBody>
              </Card>
              
            </Container> 
        );
    }
}
 
export default Main;