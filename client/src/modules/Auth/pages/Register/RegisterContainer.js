import React, { Component } from 'react';
import Register from './Register';
import { validateForm } from "./validateForm";

class RegisterContainer extends Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      organization: '',
      email: '',
      password: '',
      confirmPassword: ''
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
    const formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      organization: this.state.organization,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      console.log('Form is valid');
    } else {
      console.log('Form is invalid');
      console.log(errors);
    }
  }

  render() {
    return (
        <Register
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          organization={this.state.organization}
          email={this.state.email}
          password={this.state.password}
          confirmPassword={this.state.confirmPassword}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
    );
  }
}

export default RegisterContainer;