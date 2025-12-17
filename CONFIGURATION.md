# Framework Configuration Summary

## Retry Configuration

**Current Setting:** `--retry 1`

This means:
- Failed tests will be retried **1 time**
- Total execution: Up to **2 runs** per failing test (1 initial + 1 retry)
- If it still fails after the retry, it will be marked as **FAILED**

## How to Run Tests

### Run with default configuration (headless + retry 1):
```bash
npm test
```

### Run in headed mode (visible browser + retry 1):
```bash
HEADLESS=false npm test
```

### Run tests without retry:
```bash
npx cucumber-js --retry 0 features/**/*.feature
```

### Run with more retries (3 retries = 4 total runs):
```bash
npx cucumber-js --retry 3 features/**/*.feature
```

## Current Test Results

✓ All 6 scenarios passing
✓ All 13 steps passing
✓ Execution time: ~14 seconds in headed mode

## Files Modified

1. **cucumber.js** - Updated retry flag from `--retry 0` to `--retry 1`
2. **features/retry-demo.feature** - Demo feature showing retry mechanism

## Test Execution Flow

When a test fails:

1. **First Run**: Execute test → FAIL
2. **Retry (1 time)**: Re-execute same test → 
   - If PASS: Mark as PASSED (flaky test detected)
   - If FAIL: Mark as FAILED

## Configuration Files

- **cucumber.js**: Main Cucumber configuration
- **cucumber-support.js**: Step definition loader
- **playwright.config.ts**: Browser configuration

## Environment Variables

```bash
HEADLESS=true   # Default: Run browser in headless mode
HEADLESS=false  # Run browser in visible/headed mode
```

## Package.json Scripts

```json
{
  "scripts": {
    "test": "cucumber-js",
    "test:headed": "HEADLESS=false cucumber-js"
  }
}
```

## Summary

Your framework is now configured to:
- ✓ Run tests in headless mode by default
- ✓ Support headed mode with `HEADLESS=false`
- ✓ Retry failing tests 1 time
- ✓ Fail permanently after retry exhaustion

All tests are passing and ready for use!
