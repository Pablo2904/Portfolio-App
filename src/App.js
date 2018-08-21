import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation"
import './App.css';

class App extends Component {
  render() {
    return (

        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>

              <Route path ="/" component={About}  exact />
              <Route path ="/Projects" component={Projects} />
              <Route path ="/Resume" component={Resume} />
              <Route path ="/Contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>

    );
  }
}

export default App;
