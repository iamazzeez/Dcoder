import React, { Component } from 'react';
import { BrowserRouter as Router,  NavLink, Switch, Route} from 'react-router-dom';

import Login_Register from "./pages/login_register";


class App extends Component {
  state = {
    loggedIn:false
  }
  loginHandle = () => {
    this.setState(prevState => ({
     loggedIn: !prevState.loggedIn  
    }))
  }
  render() {
    return (
      <Router>
   <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand">Dcoder</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      
  
      <Switch>
        <Route path="/" exact strict component={Login_Register} />

        </Switch>
  </div>
      </Router>
    );
  }
}

export default App;
