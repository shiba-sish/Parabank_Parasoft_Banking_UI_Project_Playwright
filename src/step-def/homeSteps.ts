import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './hooks';

/**
 * Home Page Step Definitions
 */

Given('User is on the home page', async function (this: CustomWorld) {
  await this.homePage.navigateToHomePage();
  const isHomePageDisplayed = await this.homePage.isHomePageDisplayed();
  expect(isHomePageDisplayed).toBe(true);
});

Then('Welcome message should be displayed on home page', async function (this: CustomWorld) {
  const welcomeMsg = await this.homePage.getWelcomeMessage();
  expect(welcomeMsg).toContain('Welcome');
});

When('User clicks on Accounts Overview link', async function (this: CustomWorld) {
  await this.homePage.clickAccountsOverview();
});

When('User clicks on Transfer Funds link', async function (this: CustomWorld) {
  await this.homePage.clickTransferFunds();
});

When('User clicks on Bill Pay link', async function (this: CustomWorld) {
  await this.homePage.clickBillPay();
});

When('User clicks on Update Contact Info link', async function (this: CustomWorld) {
  await this.homePage.clickUpdateContactInfo();
});

When('User clicks on Change Password link', async function (this: CustomWorld) {
  await this.homePage.clickChangePassword();
});

When('User clicks on Logout link', async function (this: CustomWorld) {
  await this.homePage.clickLogout();
});

Then('User should be logged out and redirected to login page', async function (this: CustomWorld) {
  const isLoginPageDisplayed = await this.loginPage.isLoginPageDisplayed();
  expect(isLoginPageDisplayed).toBe(true);
});

Then('Number of accounts should be {int}', async function (this: CustomWorld, expectedCount: number) {
  const accountCount = await this.homePage.getAccountsList();
  expect(accountCount).toBeGreaterThanOrEqual(expectedCount);
});

Then('Account balance should be displayed', async function (this: CustomWorld) {
  const balance = await this.homePage.getAccountBalance();
  expect(balance.length).toBeGreaterThan(0);
});
