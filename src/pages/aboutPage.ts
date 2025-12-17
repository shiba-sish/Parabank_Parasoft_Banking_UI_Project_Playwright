import { Page } from '@playwright/test';
import { CommonUtils } from '../utils/commonUtils';
import { aboutLocators } from './locators/aboutLocators';

export class AboutPage {
  constructor(private page: Page) {}

  /**
   * Navigate to about page
   */
  async navigateToAboutPage(): Promise<void> {
    await CommonUtils.navigateToURL(this.page, 'https://parabank.parasoft.com/parabank/about.htm');
  }

  /**
   * Check if about page is displayed
   */
  async isAboutPageDisplayed(): Promise<boolean> {
    const pageURL = await CommonUtils.getPageURL(this.page);
    return pageURL.includes('about.htm');
  }

  /**
   * Get page title
   */
  async getPageTitle(): Promise<string> {
    const title = this.page.locator(aboutLocators.pageTitle);
    return await CommonUtils.getText(title);
  }

  /**
   * Get about description
   */
  async getAboutDescription(): Promise<string> {
    const description = this.page.locator(aboutLocators.aboutContent);
    return await CommonUtils.getText(description);
  }

  /**
   * Click on admin link
   */
  async clickAdminLink(): Promise<void> {
    const adminLink = this.page.locator(aboutLocators.adminLink);
    await CommonUtils.clickElement(adminLink);
    await CommonUtils.waitForNavigation(this.page);
  }

  /**
   * Click on home link
   */
  async clickHomeLink(): Promise<void> {
    const homeLink = this.page.locator(aboutLocators.homeLink);
    await CommonUtils.clickElement(homeLink);
    await CommonUtils.waitForNavigation(this.page);
  }

  /**
   * Check if contact information section is visible
   */
  async isContactInfoVisible(): Promise<boolean> {
    const contactSection = this.page.locator(aboutLocators.contactInfoSection);
    return await CommonUtils.isElementVisible(contactSection);
  }

  /**
   * Get page URL
   */
  async getPageURL(): Promise<string> {
    return await CommonUtils.getPageURL(this.page);
  }
}
