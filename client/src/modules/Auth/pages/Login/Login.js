import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles } from './loginStyles';

const Login = (props) => {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <CssBaseline/>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} onSubmit={props.handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" value={props.email} onChange={props.handleInputChange} autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" value={props.password} onChange={props.handleInputChange} autoComplete="current-password" />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            fullWidth
          >
            Sign In
          </Button>
        </form>
        <Typography component="body2" variant="caption">
          Don't have an account? <Link to="/auth/register">Sign up</Link>.
        </Typography>
      </Paper>
    </main>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);