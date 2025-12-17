import { Page } from '@playwright/test';
import { CommonUtils } from '../utils/commonUtils';
import { adminLocators } from './locators/adminLocators';

export class AdminPage {
  constructor(private page: Page) {}

  /**
   * Navigate to admin page
   */
  async navigateToAdminPage(): Promise<void> {
    await CommonUtils.navigateToURL(this.page, 'https://parabank.parasoft.com/parabank/admin.htm');
  }

  /**
   * Fill first name
   */
  async fillFirstName(firstName: string): Promise<void> {
    await this.fillFieldWithFallback(adminLocators.firstNameInput, 0, firstName);
  }

  /**
   * Fill last name
   */
  async fillLastName(lastName: string): Promise<void> {
    await this.fillFieldWithFallback(adminLocators.lastNameInput, 1, lastName);
  }

  /**
   * Fill address
   */
  async fillAddress(address: string): Promise<void> {
    await this.fillFieldWithFallback(adminLocators.addressInput, 2, address);
  }

  /**
   * Fill city
   */
  async fillCity(city: string): Promise<void> {
    await this.fillFieldWithFallback(adminLocators.cityInput, 3, city);
  }

  /**
   * Fill state
   */
  async fillState(state: string): Promise<void> {
    await this.fillFieldWithFallback(adminLocators.stateInput, 4, state);
  }

  /**
   * Fill zip code
   */
  async fillZipCode(zipCode: string): Promise<void> {
    await this.fillFieldWithFallback(adminLocators.zipCodeInput, 5, zipCode);
  }

  /**
   * Fill phone number
   */
  async fillPhoneNumber(phoneNumber: string): Promise<void> {
    await this.fillFieldWithFallback(adminLocators.phoneInput, 6, phoneNumber);
  }

  /**
   * Fill email
   */
  async fillEmail(email: string): Promise<void> {
    await this.fillFieldWithFallback(adminLocators.emailInput, 7, email);
  }

  /**
   * Fill all admin form fields
   */
  async fillAdminForm(formData: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    email: string;
  }): Promise<void> {
    await this.fillFirstName(formData.firstName);
    await this.fillLastName(formData.lastName);
    await this.fillAddress(formData.address);
    await this.fillCity(formData.city);
    await this.fillState(formData.state);
    await this.fillZipCode(formData.zipCode);
    await this.fillPhoneNumber(formData.phoneNumber);
    await this.fillEmail(formData.email);
  }

  /**
   * Try filling a field using a selector first; if not found, fallback to filling
   * the nth text-like input inside the form container.
   */
  private async fillFieldWithFallback(selector: string, fallbackIndex: number, value: string): Promise<void> {
    const field = this.page.locator(selector);
    if ((await field.count()) > 0) {
      try {
        await CommonUtils.fillText(field, value);
        return;
      } catch (err) {
        // continue to fallback
      }
    }

    // Fallback: find text/email/tel inputs and textarea inside the form
    const form = this.page.locator(adminLocators.formContainer);
    const inputs = form.locator('input[type="text"], input[type="email"], input[type="tel"], textarea, select');
    const inputsCount = await inputs.count();
    if (inputsCount > fallbackIndex) {
      const target = inputs.nth(fallbackIndex);
      await CommonUtils.fillText(target, value);
      return;
    }

    // As a last resort, try any input (excluding submit/reset)
    const anyInputs = form.locator('input');
    if ((await anyInputs.count()) > fallbackIndex) {
      const target = anyInputs.nth(fallbackIndex);
      await CommonUtils.fillText(target, value);
      return;
    }

    throw new Error(`Unable to locate field for selector ${selector} or fallback index ${fallbackIndex}`);
  }

  /**
   * Click submit button
   */
  async clickSubmit(): Promise<void> {
    const submitBtn = this.page.locator(adminLocators.submitButton);
    await CommonUtils.clickElement(submitBtn);
    await CommonUtils.waitForNavigation(this.page);
  }

  /**
   * Click reset button
   */
  async clickReset(): Promise<void> {
    const resetBtn = this.page.locator(adminLocators.resetButton);
    await CommonUtils.clickElement(resetBtn);
  }

  /**
   * Get success message
   */
  async getSuccessMessage(): Promise<string> {
    const successMsg = this.page.locator(adminLocators.successMessage);
    return await CommonUtils.getText(successMsg);
  }

  /**
   * Check if success message is displayed
   */
  async isSuccessMessageDisplayed(): Promise<boolean> {
    const successMsg = this.page.locator(adminLocators.successMessage);
    return await CommonUtils.isElementVisible(successMsg);
  }

  /**
   * Verify success message contains specific text
   */
  async verifySuccessMessage(expectedText: string): Promise<boolean> {
    const successMsg = this.page.locator(adminLocators.successMessage);
    const messageText = await CommonUtils.getText(successMsg);
    return messageText.includes(expectedText);
  }

  /**
   * Check if admin page is displayed
   */
  async isAdminPageDisplayed(): Promise<boolean> {
    const formContainer = this.page.locator(adminLocators.formContainer);
    return await CommonUtils.isElementVisible(formContainer);
  }

  /**
   * Get current page URL
   */
  async getCurrentURL(): Promise<string> {
    return await CommonUtils.getPageURL(this.page);
  }
}
