import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { styles } from './topNavStyles';

const TopNav = (props) => {
  const { classes } = props;
  return (
    <AppBar
      position="absolute"
      className={classNames(classes.appBar, props.drawerOpen && classes.appBarShift)}
    >
      <Toolbar disableGutters={!props.drawerOpen} className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={props.handleDrawerOpen}
          className={classNames(
            classes.menuButton,
            props.drawerOpen && classes.menuButtonHidden,
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
};

TopNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopNav);