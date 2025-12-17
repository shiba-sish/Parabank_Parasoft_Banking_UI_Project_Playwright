/**
 * Login Page Locators
 * Locators for the Login page of Parabank application
 */
export const loginLocators = {
  // Header elements
  parabankLogo: 'img[alt="ParaBank"]',
  pageTitle: 'h2',

  // Login form
  loginForm: '#loginPanel',
  usernameInput: 'input[name="username"]',
  passwordInput: 'input[name="password"]',
  loginButton: 'input[value="Log In"]',
  forgotLoginLink: 'a[href="/parabank/lookup.htm"]',

  // Error messages
  errorMessage: '.error',
  loginErrorText: '.error',

  // Registration link
  registrationLink: 'a[href="/parabank/register.htm"]',
  openNewAccountLink: 'a[href="/parabank/openaccount.htm"]',
};
