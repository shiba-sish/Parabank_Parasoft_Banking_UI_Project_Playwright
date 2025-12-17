import { Browser, BrowserContext, Page } from '@playwright/test';

export class ScenarioContext {
  public browser?: Browser;
  public context?: BrowserContext;
  public page?: Page;

  /**
   * Initialize browser and context
   */
  async initializeBrowser(browser: Browser): Promise<void> {
    this.browser = browser;
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
  }

  /**
   * Close all browser resources
   */
  async closeBrowser(): Promise<void> {
    if (this.page) {
      await this.page.close();
    }
    if (this.context) {
      await this.context.close();
    }
    if (this.browser) {
      await this.browser.close();
    }
  }

  /**
   * Get the current page
   */
  getPage(): Page {
    if (!this.page) {
      throw new Error('Page is not initialized');
    }
    return this.page;
  }

  /**
   * Get the browser context
   */
  getContext(): BrowserContext {
    if (!this.context) {
      throw new Error('Context is not initialized');
    }
    return this.context;
  }

  /**
   * Get the browser
   */
  getBrowser(): Browser {
    if (!this.browser) {
      throw new Error('Browser is not initialized');
    }
    return this.browser;
  }
}
