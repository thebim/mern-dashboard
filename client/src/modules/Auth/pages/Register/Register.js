import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles } from './registerStyles';

const Register = (props) => {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <CssBaseline/>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Account
        </Typography>
        <form className={classes.form} onSubmit={props.handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <Input id="firstName" name="firstName" autoComplete="firstName" value={props.firstName} onChange={props.handleInputChange} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Input id="lastName" name="lastName" autoComplete="lastName" value={props.lastName} onChange={props.handleInputChange} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="organization">Organization</InputLabel>
            <Select id="organization" name="organization" autoComplete="organization" value={props.organization} onChange={props.handleInputChange} >
              <MenuItem value={`Core Technologies, Inc.`}>Core Technologies, Inc.</MenuItem>
            </Select>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" value={props.email} onChange={props.handleInputChange} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" value={props.password} onChange={props.handleInputChange} autoComplete="current-password" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <Input name="confirmPassword" type="password" id="confirmPassword" value={props.confirmPassword} onChange={props.handleInputChange} autoComplete="current-password" />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            fullWidth
          >
            Register
          </Button>
        </form>
        <Typography component="body2" variant="caption">
          Already have an account? <Link to="/auth">Sign in</Link>.
        </Typography>
      </Paper>
    </main>
  );
};

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);