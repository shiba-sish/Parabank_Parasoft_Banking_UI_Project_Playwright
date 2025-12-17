/**
 * Admin Page Locators
 * Locators for the Administration page elements
 */
export const adminLocators = {
  // Admin page title
  pageTitle: 'h1',
  
  // Form fields
  firstNameInput: 'input[name="firstName"]',
  lastNameInput: 'input[name="lastName"]',
  addressInput: 'input[name="address"]',
  cityInput: 'input[name="city"]',
  stateInput: 'input[name="state"]',
  zipCodeInput: 'input[name="zipCode"]',
  phoneInput: 'input[name="phoneNumber"]',
  emailInput: 'input[name="email"]',
  
  // Buttons
  submitButton: 'input[type="submit"]',
  resetButton: 'input[type="reset"]',
  
  // Success message
  successMessage: '.heading1',
  successText: 'text=Settings saved successfully',
  
  // Form container
  formContainer: 'form',
};
