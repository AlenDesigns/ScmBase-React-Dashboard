import React, { Component } from 'react';


import {
    Route, Switch 
} from 'react-router-dom';


// Pages
import Home from './pages/Home';
import Pages from './pages/Pages';
import AddPage from './pages/Pages/AddPage';


class Main extends Component {
    render() { 
        return (  
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pages" component={Pages} />
                <Route exact path="/page/add" component={AddPage} />
              </Switch>
            </main> 
        );
    }
}
 
export default Main;