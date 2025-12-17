import { Page } from '@playwright/test';
import { CommonUtils } from '../utils/commonUtils';

export class NavigationPage {
  constructor(private page: Page) {}

  /**
   * Navigate to home page
   */
  async navigateToHome(): Promise<void> {
    await CommonUtils.navigateToURL(this.page, 'https://parabank.parasoft.com/parabank/index.htm');
  }

  /**
   * Navigate to Solutions page
   */
  async navigateToSolutions(): Promise<void> {
    await CommonUtils.navigateToURL(this.page, 'https://parabank.parasoft.com/parabank/solutions.htm');
  }

  /**
   * Navigate to About Us page
   */
  async navigateToAboutUs(): Promise<void> {
    await CommonUtils.navigateToURL(this.page, 'https://parabank.parasoft.com/parabank/about.htm');
  }

  /**
   * Navigate to Services page
   */
  async navigateToServices(): Promise<void> {
    await CommonUtils.navigateToURL(this.page, 'https://parabank.parasoft.com/parabank/services.htm');
  }

  /**
   * Navigate to Products page
   */
  async navigateToProducts(): Promise<void> {
    await CommonUtils.navigateToURL(this.page, 'https://parabank.parasoft.com/parabank/products.htm');
  }

  /**
   * Navigate to Locations page
   */
  async navigateToLocations(): Promise<void> {
    await CommonUtils.navigateToURL(this.page, 'https://parabank.parasoft.com/parabank/locations.htm');
  }

  /**
   * Navigate to Admin Page
   */
  async navigateToAdminPage(): Promise<void> {
    await CommonUtils.navigateToURL(this.page, 'https://parabank.parasoft.com/parabank/admin.htm');
  }

  /**
   * Get current page URL
   */
  async getCurrentURL(): Promise<string> {
    return await CommonUtils.getPageURL(this.page);
  }

  /**
   * Verify page title
   */
  async getPageTitle(): Promise<string> {
    return await CommonUtils.getPageTitle(this.page);
  }

  /**
   * Verify if URL contains specific path
   */
  async isURLContains(pathSegment: string): Promise<boolean> {
    const url = await this.getCurrentURL();
    return url.includes(pathSegment);
  }
}
