import React, { Component } from 'react';
import Login from "./Login";

class LoginContainer extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
        <Login
          email={this.state.email}
          password={this.state.password}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
    );
  }
}

export default LoginContainer;