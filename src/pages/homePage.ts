import { Page } from '@playwright/test';
import { CommonUtils } from '../utils/commonUtils';
import { homeLocators } from './locators/homeLocators';

export class HomePage {
  constructor(private page: Page) {}

  /**
   * Navigate to home page
   */
  async navigateToHomePage(): Promise<void> {
    await CommonUtils.navigateToURL(this.page, 'https://parabank.parasoft.com/parabank/index.htm');
  }

  /**
   * Check if home page is displayed
   */
  async isHomePageDisplayed(): Promise<boolean> {
    const pageURL = await CommonUtils.getPageURL(this.page);
    return pageURL.includes('index.htm') && !pageURL.includes('login');
  }

  /**
   * Get welcome message
   */
  async getWelcomeMessage(): Promise<string> {
    const welcomeMsg = this.page.locator(homeLocators.userWelcomeText);
    return await CommonUtils.getText(welcomeMsg);
  }

  /**
   * Click logout link
   */
  async clickLogout(): Promise<void> {
    const logoutBtn = this.page.locator(homeLocators.logoutLink);
    await CommonUtils.clickElement(logoutBtn);
    await CommonUtils.waitForNavigation(this.page);
  }

  /**
   * Click on Accounts Overview
   */
  async clickAccountsOverview(): Promise<void> {
    const accountsLink = this.page.locator(homeLocators.accountsOverviewLink);
    await CommonUtils.clickElement(accountsLink);
    await CommonUtils.waitForNavigation(this.page);
  }

  /**
   * Click on Transfer Funds
   */
  async clickTransferFunds(): Promise<void> {
    const transferLink = this.page.locator(homeLocators.transferFundsLink);
    await CommonUtils.clickElement(transferLink);
    await CommonUtils.waitForNavigation(this.page);
  }

  /**
   * Click on Bill Pay
   */
  async clickBillPay(): Promise<void> {
    const billPayLink = this.page.locator(homeLocators.billPayLink);
    await CommonUtils.clickElement(billPayLink);
    await CommonUtils.waitForNavigation(this.page);
  }

  /**
   * Click on Update Contact Info
   */
  async clickUpdateContactInfo(): Promise<void> {
    const updateLink = this.page.locator(homeLocators.updateContactInfoLink);
    await CommonUtils.clickElement(updateLink);
    await CommonUtils.waitForNavigation(this.page);
  }

  /**
   * Get all accounts
   */
  async getAccountsList(): Promise<number> {
    const accounts = this.page.locator(homeLocators.accountItem);
    return await CommonUtils.getElementCount(accounts);
  }

  /**
   * Get account balance
   */
  async getAccountBalance(): Promise<string> {
    const balance = this.page.locator(homeLocators.accountBalance).first();
    return await CommonUtils.getText(balance);
  }

  /**
   * Click on Change Password
   */
  async clickChangePassword(): Promise<void> {
    const changePassLink = this.page.locator(homeLocators.changePasswordLink);
    await CommonUtils.clickElement(changePassLink);
    await CommonUtils.waitForNavigation(this.page);
  }
}
