# ParaBank Playwright Cucumber Framework

A comprehensive SDET (Software Development Engineer in Test) automation framework built with Playwright, TypeScript, and Cucumber for testing the ParaBank web application.

## Project Structure

```
parabank-playwright-cucumber/
├── features/                          # Feature files (Gherkin scenarios)
│   ├── login.feature
│   ├── home.feature
│   └── about.feature
├── src/
│   ├── pages/                         # Page Object Model (POM)
│   │   ├── locators/                  # Segregated locators
│   │   │   ├── loginLocators.ts
│   │   │   ├── homeLocators.ts
│   │   │   └── aboutLocators.ts
│   │   ├── loginPage.ts
│   │   ├── homePage.ts
│   │   └── aboutPage.ts
│   ├── step-def/                      # Step Definition files
│   │   ├── hooks.ts                   # Before/After hooks
│   │   ├── loginSteps.ts
│   │   ├── homeSteps.ts
│   │   └── aboutSteps.ts
│   └── utils/                         # Utility files
│       ├── context.ts                 # Scenario context & browser management
│       └── commonUtils.ts             # Common reusable utilities
├── tests/                             # Playwright test files (if needed)
├── test-results/                      # Test execution reports
├── package.json                       # Dependencies and scripts
├── tsconfig.json                      # TypeScript configuration
├── cucumber.js                        # Cucumber configuration
├── playwright.config.ts               # Playwright configuration
└── README.md                          # Project documentation
```

## Features

✅ **Page Object Model (POM)** - Well-structured page classes with locators segregation
✅ **Cucumber BDD** - Human-readable feature files with scenario outlines
✅ **TypeScript** - Strong typing for better code quality and IDE support
✅ **Playwright** - Fast, reliable cross-browser testing
✅ **Context Management** - ScenarioContext for managing browser/page lifecycle
✅ **Common Utilities** - Reusable utility functions for common actions
✅ **Screenshot on Failure** - Automatic screenshot capture on test failures
✅ **HTML Reports** - Detailed test execution reports
✅ **Before/After Hooks** - Proper setup and teardown of test environment

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd parabank-playwright-cucumber
```

2. Install dependencies:
```bash
npm install
```

## Configuration

### Application URL
```
https://parabank.parasoft.com/parabank/about.htm
```

### Browser Settings
```bash
# Run in headless mode (default)
npm test

# Run in headed mode (with visible browser)
HEADLESS=false npm test
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode
```bash
HEADLESS=false npm test
```

### Run specific feature
```bash
npx cucumber-js features/login.feature
```

### Generate HTML report
```bash
npm run test:report
```

## Test Data

Default test credentials:
- Username: `jsmith`
- Password: `demo`

## Key Components

### Page Objects
- **LoginPage** - Login functionality
- **HomePage** - Home/Dashboard functionality
- **AboutPage** - About page functionality

### Step Definitions
- **loginSteps.ts** - Login related steps
- **homeSteps.ts** - Home page related steps
- **aboutSteps.ts** - About page related steps

### Utilities
- **CommonUtils** - Reusable common utility methods
- **ScenarioContext** - Browser and page lifecycle management

### Locators
- **loginLocators.ts** - Login page selectors
- **homeLocators.ts** - Home page selectors
- **aboutLocators.ts** - About page selectors

## Best Practices

1. Keep all locators in separate locator files
2. Use Page Object Model for page interactions
3. Write clear, business-readable scenarios
4. Use CommonUtils for repeated actions
5. Manage browser lifecycle through ScenarioContext
6. Capture screenshots on test failures
7. Use before/after hooks for setup and teardown

## Contributing

1. Create a new branch for features
2. Write feature files first (BDD approach)
3. Implement page objects
4. Add step definitions
5. Run tests locally before pushing

## License

ISC

## Support

For issues or questions, please create an issue in the repository.

---

**Happy Testing! 🚀**