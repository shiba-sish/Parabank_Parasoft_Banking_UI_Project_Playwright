import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './hooks';

/**
 * Navigation Step Definitions
 */

Given('User is on the Parabank home page', async function (this: CustomWorld) {
  await this.navigationPage.navigateToHome();
  const url = await this.navigationPage.getCurrentURL();
  expect(url).toContain('index.htm');
});

When('User navigates to Solutions page', async function (this: CustomWorld) {
  await this.navigationPage.navigateToSolutions();
});

When('User navigates to About Us page', async function (this: CustomWorld) {
  await this.navigationPage.navigateToAboutUs();
});

When('User navigates to Services page', async function (this: CustomWorld) {
  await this.navigationPage.navigateToServices();
});

When('User navigates to Products page', async function (this: CustomWorld) {
  await this.navigationPage.navigateToProducts();
});

When('User navigates to Locations page', async function (this: CustomWorld) {
  await this.navigationPage.navigateToLocations();
});

When('User navigates to Admin Page via navigation', async function (this: CustomWorld) {
  await this.navigationPage.navigateToAdminPage();
});

Then('Solutions page should be displayed', async function (this: CustomWorld) {
  const url = await this.navigationPage.getCurrentURL();
  expect(url).toContain('solutions');
});

Then('About Us page should be displayed', async function (this: CustomWorld) {
  const url = await this.navigationPage.getCurrentURL();
  expect(url).toContain('about');
});

Then('Services page should be displayed', async function (this: CustomWorld) {
  const url = await this.navigationPage.getCurrentURL();
  expect(url).toContain('services');
});

Then('Products page should be displayed', async function (this: CustomWorld) {
  const url = await this.navigationPage.getCurrentURL();
  expect(url).toContain('products');
});

Then('Locations page should be displayed', async function (this: CustomWorld) {
  const url = await this.navigationPage.getCurrentURL();
  expect(url).toContain('locations');
});

Then('Admin Page should be displayed', async function (this: CustomWorld) {
  const url = await this.navigationPage.getCurrentURL();
  expect(url).toContain('admin');
});
