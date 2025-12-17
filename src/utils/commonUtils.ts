import { Page, Locator } from '@playwright/test';

export class CommonUtils {
  /**
   * Navigate to URL
   */
  static async navigateToURL(page: Page, url: string): Promise<void> {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  /**
   * Click an element
   */
  static async clickElement(locator: Locator): Promise<void> {
    await locator.click();
  }

  /**
   * Fill text in input field
   */
  static async fillText(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  /**
   * Get text from element
   */
  static async getText(locator: Locator): Promise<string> {
    return await locator.textContent() || '';
  }

  /**
   * Check if element is visible
   */
  static async isElementVisible(locator: Locator): Promise<boolean> {
    try {
      return await locator.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * Wait for element to be visible
   */
  static async waitForElementVisibility(locator: Locator, timeout: number = 5000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
  }

  /**
   * Get attribute value
   */
  static async getAttributeValue(locator: Locator, attribute: string): Promise<string | null> {
    return await locator.getAttribute(attribute);
  }

  /**
   * Check if element is enabled
   */
  static async isElementEnabled(locator: Locator): Promise<boolean> {
    return await locator.isEnabled();
  }

  /**
   * Get count of elements
   */
  static async getElementCount(locator: Locator): Promise<number> {
    return await locator.count();
  }

  /**
   * Scroll to element
   */
  static async scrollToElement(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
  }

  /**
   * Double click an element
   */
  static async doubleClick(locator: Locator): Promise<void> {
    await locator.dblclick();
  }

  /**
   * Right click an element
   */
  static async rightClick(locator: Locator): Promise<void> {
    await locator.click({ button: 'right' });
  }

  /**
   * Hover over element
   */
  static async hoverElement(locator: Locator): Promise<void> {
    await locator.hover();
  }

  /**
   * Press key
   */
  static async pressKey(page: Page, key: string): Promise<void> {
    await page.press('body', key);
  }

  /**
   * Take screenshot
   */
  static async takeScreenshot(page: Page, filename: string): Promise<void> {
    await page.screenshot({ path: `./test-results/${filename}.png` });
  }

  /**
   * Wait for navigation
   */
  static async waitForNavigation(page: Page): Promise<void> {
    await page.waitForLoadState('domcontentloaded');
  }

  /**
   * Get page title
   */
  static async getPageTitle(page: Page): Promise<string> {
    return await page.title();
  }

  /**
   * Get page URL
   */
  static async getPageURL(page: Page): Promise<string> {
    return page.url();
  }
}
