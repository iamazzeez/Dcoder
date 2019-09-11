import React, { Component } from "react";
import AuthContext from "../utils/auth-context";

export default class MainNavbar extends Component {
  handelLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    window.location = "/auth";
  };

  render() {
    return (
      <AuthContext.Consumer>
        {context => (
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <h4 className="navbar-brand">Segment Experiment</h4>
              {localStorage.getItem("token") && (
                <button
                  className="btn btn-danger"
                  onClick={this.handelLogout}
                  type="submit"
                >
                  Logout
                </button>
              )}
            </nav>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}
