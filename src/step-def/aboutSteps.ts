import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './hooks';

/**
 * About Page Step Definitions
 */

Given('User navigates to the about page', async function (this: CustomWorld) {
  await this.aboutPage.navigateToAboutPage();
});

Then('About page should be displayed', async function (this: CustomWorld) {
  const pageURL = await this.aboutPage.getPageURL();
  expect(pageURL).toContain('about.htm');
});

Then('Page title should contain {string}', async function (this: CustomWorld, expectedTitle: string) {
  const pageTitle = await this.aboutPage.getPageTitle();
  expect(pageTitle).toContain(expectedTitle);
});

Then('About page description should be visible', async function (this: CustomWorld) {
  const description = await this.aboutPage.getAboutDescription();
  expect(description.length).toBeGreaterThan(0);
});

When('User clicks on Admin link', async function (this: CustomWorld) {
  await this.aboutPage.clickAdminLink();
});

When('User clicks on Home link from about page', async function (this: CustomWorld) {
  await this.aboutPage.clickHomeLink();
});

Then('Contact information section should be visible', async function (this: CustomWorld) {
  const isContactVisible = await this.aboutPage.isContactInfoVisible();
  expect(isContactVisible).toBe(true);
});

Then('Current page URL should contain {string}', async function (this: CustomWorld, expectedURL: string) {
  const pageURL = await this.aboutPage.getPageURL();
  expect(pageURL).toContain(expectedURL);
});
