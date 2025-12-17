# Quick Start Guide

## 🚀 Project Setup Complete!

Your Playwright TypeScript Cucumber framework for ParaBank is ready!

## Next Steps

### 1. Install Dependencies
```bash
cd /Users/shibasishchina/IdeaProjects/Parabank_Parasoft_Banking_UI_Project_Playwright
npm install
```

### 2. Install TypeScript and ts-node globally (recommended)
```bash
npm install -g typescript ts-node
```

### 3. Run Tests
```bash
# Run all tests
npm test

# Run tests in headed mode (with visible browser)
HEADLESS=false npm test

# Run specific feature
npx cucumber-js features/login.feature

# Run specific scenario
npx cucumber-js features/login.feature --name "User logs in with valid credentials"
```

### 4. View Test Reports
After running tests, open:
```
./test-results/report.html
```

## Project Structure Overview

```
✅ Features (BDD Scenarios)
  ├── login.feature        - Login functionality tests
  ├── home.feature         - Home page functionality tests
  └── about.feature        - About page functionality tests

✅ Page Objects (POM)
  ├── loginPage.ts         - Login page interactions
  ├── homePage.ts          - Home page interactions
  └── aboutPage.ts         - About page interactions

✅ Locators (Segregated)
  ├── loginLocators.ts     - Login page selectors
  ├── homeLocators.ts      - Home page selectors
  └── aboutLocators.ts     - About page selectors

✅ Step Definitions
  ├── loginSteps.ts        - Login step implementations
  ├── homeSteps.ts         - Home page step implementations
  ├── aboutSteps.ts        - About page step implementations
  └── hooks.ts             - Before/After hooks

✅ Utilities
  ├── commonUtils.ts       - Reusable common methods
  └── context.ts           - Browser/Page lifecycle management

✅ Configuration
  ├── cucumber.js          - Cucumber configuration
  ├── playwright.config.ts - Playwright configuration
  ├── tsconfig.json        - TypeScript configuration
  └── package.json         - Dependencies
```

## File Descriptions

### 📄 Feature Files
- **login.feature**: Tests for user login with valid/invalid credentials, forgot login, registration
- **home.feature**: Tests for home page navigation, accounts, logout
- **about.feature**: Tests for about page content and navigation

### 📄 Page Objects
- **LoginPage**: Handles login page interactions (login, error messages, navigation)
- **HomePage**: Handles home page interactions (navigation, account operations)
- **AboutPage**: Handles about page interactions (navigation, content verification)

### 📄 Locators
- All CSS selectors and XPath expressions are segregated by page
- Easy to maintain and update selectors
- Clear naming convention

### 📄 Step Definitions
- BDD-style steps that are human-readable
- Each step definition maps to one user action
- Uses page objects internally

### 📄 Utilities
- **CommonUtils**: 20+ reusable methods for common actions
  - Click, fill, get text, wait for elements, take screenshots, etc.
- **ScenarioContext**: Manages browser and page instances
  - Handles initialization and cleanup
  - Provides getters for browser, context, and page

### 📄 Configuration Files
- **cucumber.js**: Cucumber runner configuration with TypeScript support
- **playwright.config.ts**: Playwright browser configuration
- **tsconfig.json**: TypeScript compiler configuration
- **package.json**: Dependencies and test scripts

## Test Data

Default credentials for Parabank:
```
Username: jsmith
Password: demo
```

## Application URL

```
https://parabank.parasoft.com/parabank/about.htm
```

## Available npm Scripts

```bash
npm test              # Run all Cucumber tests
HEADLESS=false npm test  # Run tests with visible browser
npm run test:headed   # Run tests in headed mode
npm run test:debug    # Run tests in debug mode
npm run test:report   # Generate HTML report
npm run clean         # Clean test results
```

## Environment Variables

```bash
HEADLESS=false    # Run browser in headed mode (default: true)
```

## Adding New Tests

### 1. Create a Feature File
```gherkin
Feature: Feature Name

  Scenario: Test Scenario
    Given User navigates to the login page
    When User enters username "jsmith"
    And User enters password "demo"
    Then Login should be successful
```

### 2. Create Page Object (if new page)
```typescript
export class NewPage {
  constructor(private page: Page) {}
  
  async someAction(): Promise<void> {
    // Implementation
  }
}
```

### 3. Create Locators File (if new page)
```typescript
export const newPageLocators = {
  element: 'css-selector',
  button: 'another-selector'
};
```

### 4. Create Step Definition
```typescript
When('User does something', async function(this: CustomWorld) {
  await this.newPage.someAction();
});
```

### 5. Update hooks.ts to Initialize Page
```typescript
this.newPage = new NewPage(this.context.getPage());
```

## Best Practices

✅ Keep locators in separate files
✅ Use Page Object Model pattern
✅ Write clear, business-readable scenarios
✅ DRY principle - reuse CommonUtils methods
✅ One assertion per step when possible
✅ Use meaningful variable names
✅ Add comments for complex logic
✅ Keep test data in feature files
✅ Use hooks for setup/teardown
✅ Capture screenshots on failures

## Troubleshooting

**Tests not running?**
- Check Node.js installation: `node --version`
- Install dependencies: `npm install`
- Check if ts-node is available: `npx ts-node --version`

**Locator not found?**
- Use Playwright Inspector: `npx playwright codegen https://parabank.parasoft.com`
- Verify selector in browser console
- Check if element is visible/loaded

**Timeouts?**
- Increase timeout in CommonUtils methods
- Check if application is loading correctly
- Verify network connectivity

## Support & Documentation

- Playwright Docs: https://playwright.dev
- Cucumber Docs: https://cucumber.io/docs
- TypeScript Docs: https://www.typescriptlang.org/docs

---

**Happy Testing! 🎉**

For detailed information, refer to README.md
