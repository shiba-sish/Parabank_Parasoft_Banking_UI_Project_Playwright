import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './hooks';

/**
 * Login Step Definitions
 */

Given('User navigates to the login page', async function (this: CustomWorld) {
  await this.loginPage.navigateToLoginPage();
  const isDisplayed = await this.loginPage.isLoginPageDisplayed();
  expect(isDisplayed).toBe(true);
});

When('User enters username {string}', async function (this: CustomWorld, username: string) {
  await this.loginPage.enterUsername(username);
});

When('User enters password {string}', async function (this: CustomWorld, password: string) {
  await this.loginPage.enterPassword(password);
});

When('User clicks the login button', async function (this: CustomWorld) {
  await this.loginPage.clickLoginButton();
});

When('User logs in with username {string} and password {string}', async function (
  this: CustomWorld,
  username: string,
  password: string
) {
  await this.loginPage.login(username, password);
});

Then('Login should be successful and user should be on home page', async function (this: CustomWorld) {
  const isHomePageDisplayed = await this.homePage.isHomePageDisplayed();
  expect(isHomePageDisplayed).toBe(true);
});

Then('Error message should be displayed', async function (this: CustomWorld) {
  const isErrorDisplayed = await this.loginPage.isErrorMessageDisplayed();
  expect(isErrorDisplayed).toBe(true);
});

Then('Error message should contain {string}', async function (this: CustomWorld, expectedText: string) {
  const errorMsg = await this.loginPage.getErrorMessage();
  expect(errorMsg.toLowerCase()).toContain(expectedText.toLowerCase());
});

When('User clicks on Forgot Login link', async function (this: CustomWorld) {
  await this.loginPage.clickForgotLoginLink();
});

When('User clicks on Registration link', async function (this: CustomWorld) {
  await this.loginPage.clickRegistrationLink();
});
