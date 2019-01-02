import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Auth } from "./modules/Auth";
import { Dashboard } from './modules/Dashboard';
import './App.css';

const Index = () => {
  return (
    <ul>
      <li><Link to="/auth">Auth</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/auth" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
