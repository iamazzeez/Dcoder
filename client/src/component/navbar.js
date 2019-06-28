
import AuthContext from "../utils/auth-context";
import React, { Component } from 'react'

export default class MainNavbar extends Component {
    render() {
        return (
            <AuthContext.Consumer>
            {(context) => {
                  return (
                    <div>
                         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                      <h4 className="navbar-brand">Dcoder</h4>
                     {context.token && <button class="btn btn-secondary my-2 my-sm-0" type="submit">Logout
                     </button>}
                    </nav>
                    </div>
                )
         }}
        </AuthContext.Consumer>
        )
    }
}

