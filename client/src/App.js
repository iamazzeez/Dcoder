import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, NavLink, Switch, Route} from 'react-router-dom';

import Login_Register from "./pages/login_register";
import Threads from './pages/threads';
import AuthContext from "./utils/auth-context";
import MainNavbar from './component/navbar';

class App extends Component {
  state = {
    token: null,
    userId: null,
    email: null,
  }
  login = (token, userId, email) => {
    this.setState({
     token: token, userId: userId, email: email
    })
  }

  logout = () => {
     this.setState({
      token: null,
     userId: null,
     email: null,

     })
  };

  render() {
    return (
      <Router>
        <AuthContext.Provider 
        value={{
          token: this.state.token,
          userId: this.state.userId,
          email: this.state.email,
          login: this.login,
          logout: this.logout
        }}>
   <div>
       <MainNavbar />
      <Switch>
        {!this.state.token && <Redirect from="/" to="/auth" exact />}
        <Route path="/auth" exact strict component={Login_Register} />
        <Route path="/threads" exact strict component={Threads} />
        </Switch>
  </div>
  </AuthContext.Provider>
      </Router>
    
    );
  }
}

export default App;
