import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginContainer from "./pages/Login/LoginContainer";
import RegisterContainer from "./pages/Register/RegisterContainer";
import VerticalAlign from "../../components/VerticalAlign";

/**
 *  Container class for login/registration functionality.
 */
class Auth extends Component {
  render() {
    return (
      <VerticalAlign>
        <Switch>
          <Route exact path="/auth" component={LoginContainer} />
          <Route exact path="/auth/register" component={RegisterContainer} />
          <Redirect from="/auth/*" to="/auth" />
        </Switch>
      </VerticalAlign>
    );
  }
}

export default Auth;