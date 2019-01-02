export const validateForm = (formData) => {
  const { firstName, lastName, organization, email, password, confirmPassword } = formData;
  let isValid = true;
  let errors = {};

  if (firstName.length === 0) {
    isValid = false;
    errors.firstName = 'First name is required.';
  }

  if (lastName.length === 0) {
    isValid = false;
    errors.lastName = 'Last name is required.';
  }

  if (organization.length === 0) {
    isValid = false;
    errors.organization = 'An affiliated organization is required.';
  }

  if (password.length === 0) {
    isValid = false;
    errors.password = 'Passwords must be at least 8 characters.';
  }

  if (confirmPassword.length === 0 || confirmPassword !== password) {
    isValid = false;
    errors.confirmPassword = 'Passwords must match.';
  }

  return errors;
};