import { Page } from '@playwright/test';
import { CommonUtils } from '../utils/commonUtils';
import { loginLocators } from './locators/loginLocators';

export class LoginPage {
  constructor(private page: Page) {}

  /**
   * Navigate to login page
   */
  async navigateToLoginPage(): Promise<void> {
    await CommonUtils.navigateToURL(this.page, 'https://parabank.parasoft.com/parabank/index.htm');
  }

  /**
   * Enter username
   */
  async enterUsername(username: string): Promise<void> {
    const usernameField = this.page.locator(loginLocators.usernameInput);
    await CommonUtils.fillText(usernameField, username);
  }

  /**
   * Enter password
   */
  async enterPassword(password: string): Promise<void> {
    const passwordField = this.page.locator(loginLocators.passwordInput);
    await CommonUtils.fillText(passwordField, password);
  }

  /**
   * Click login button
   */
  async clickLoginButton(): Promise<void> {
    const loginBtn = this.page.locator(loginLocators.loginButton);
    await CommonUtils.clickElement(loginBtn);
  }

  /**
   * Login with credentials
   */
  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
    await CommonUtils.waitForNavigation(this.page);
  }

  /**
   * Check if login page is displayed
   */
  async isLoginPageDisplayed(): Promise<boolean> {
    const loginForm = this.page.locator(loginLocators.loginForm);
    return await CommonUtils.isElementVisible(loginForm);
  }

  /**
   * Get error message
   */
  async getErrorMessage(): Promise<string> {
    const errorMsg = this.page.locator(loginLocators.errorMessage);
    return await CommonUtils.getText(errorMsg);
  }

  /**
   * Check if error message is displayed
   */
  async isErrorMessageDisplayed(): Promise<boolean> {
    const errorMsg = this.page.locator(loginLocators.errorMessage);
    return await CommonUtils.isElementVisible(errorMsg);
  }

  /**
   * Click forgot login link
   */
  async clickForgotLoginLink(): Promise<void> {
    const forgotLink = this.page.locator(loginLocators.forgotLoginLink);
    await CommonUtils.clickElement(forgotLink);
    await CommonUtils.waitForNavigation(this.page);
  }

  /**
   * Click registration link
   */
  async clickRegistrationLink(): Promise<void> {
    const regLink = this.page.locator(loginLocators.registrationLink);
    await CommonUtils.clickElement(regLink);
    await CommonUtils.waitForNavigation(this.page);
  }
}
