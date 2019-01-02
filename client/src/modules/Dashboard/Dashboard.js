import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { styles } from './dashboardStyles';

import TopNavBar from './components/TopNav/TopNav';
import SideNav from './components/SideNav/SideNav';

const Test = () => {
  return <h1>Test</h1>;
};

const Services = () => {
  return <h1>Services</h1>;
};

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: false
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ drawerOpen: true });
  }

  handleDrawerClose() {
    this.setState({ drawerOpen: false });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <TopNavBar
          drawerOpen={this.state.drawerOpen}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <SideNav
          drawerOpen={this.state.drawerOpen}
          handleDrawerClose={this.handleDrawerClose}
        />
        <main className={classes.content}>
          <Switch>
            <Route exact path="/dashboard" component={Test} />
            <Route exact path="/dashboard/services" component={Services} />
          </Switch>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);