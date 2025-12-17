import { Before, After, setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, chromium } from '@playwright/test';
import { ScenarioContext } from '../utils/context';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { AboutPage } from '../pages/aboutPage';
import { NavigationPage } from '../pages/navigationPage';
import { AdminPage } from '../pages/adminPage';

/**
 * Custom World class to hold scenario-specific data and page objects
 */
export class CustomWorld extends World {
  public context: ScenarioContext;
  public loginPage!: LoginPage;
  public homePage!: HomePage;
  public aboutPage!: AboutPage;
  public navigationPage!: NavigationPage;
  public adminPage!: AdminPage;

  constructor(options: IWorldOptions) {
    super(options);
    this.context = new ScenarioContext();
  }
}

/**
 * Set World type for Cucumber
 */
setWorldConstructor(CustomWorld);

/**
 * Hook: Initialize browser before each scenario
 */
Before(async function (this: CustomWorld) {
  const browser: Browser = await chromium.launch({ headless: process.env.HEADLESS !== 'false' });
  await this.context.initializeBrowser(browser);

  // Initialize page objects
  this.loginPage = new LoginPage(this.context.getPage());
  this.homePage = new HomePage(this.context.getPage());
  this.aboutPage = new AboutPage(this.context.getPage());
  this.navigationPage = new NavigationPage(this.context.getPage());
  this.adminPage = new AdminPage(this.context.getPage());

  console.log('✓ Browser initialized');
});

/**
 * Hook: Close browser after each scenario
 */
After(async function (this: CustomWorld) {
  try {
    await this.context.closeBrowser();
    console.log('✓ Browser closed');
  } catch (error) {
    console.error('Error during After hook:', error);
  }
});
