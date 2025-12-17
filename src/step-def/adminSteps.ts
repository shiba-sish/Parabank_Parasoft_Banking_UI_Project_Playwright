import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './hooks';

/**
 * Admin Page Step Definitions
 */

Given('User navigates to Admin Page', async function (this: CustomWorld) {
  await this.adminPage.navigateToAdminPage();
  const isAdminPageDisplayed = await this.adminPage.isAdminPageDisplayed();
  expect(isAdminPageDisplayed).toBe(true);
});

When('User fills the admin form with following details', async function (this: CustomWorld, dataTable: DataTable) {
  const formData = dataTable.rowsHash();
  
  await this.adminPage.fillAdminForm({
    firstName: formData['First Name'],
    lastName: formData['Last Name'],
    address: formData['Address'],
    city: formData['City'],
    state: formData['State'],
    zipCode: formData['Zip Code'],
    phoneNumber: formData['Phone Number'],
    email: formData['Email'],
  });
});

When('User submits the admin form', async function (this: CustomWorld) {
  await this.adminPage.clickSubmit();
});

Then('Success message should be displayed with text {string}', async function (this: CustomWorld, expectedText: string) {
  // Wait a moment for the message to appear
  await this.adminPage.getSuccessMessage();
  const isMessageDisplayed = await this.adminPage.isSuccessMessageDisplayed();
  expect(isMessageDisplayed).toBe(true);
  
  const isCorrectMessage = await this.adminPage.verifySuccessMessage(expectedText);
  expect(isCorrectMessage).toBe(true);
});

Then('The success message should contain {string}', async function (this: CustomWorld, expectedText: string) {
  const successMessage = await this.adminPage.getSuccessMessage();
  expect(successMessage).toContain(expectedText);
});
