// This file ensures step definitions are loaded
require('ts-node').register({
  transpileOnly: true,
  project: './tsconfig.json',
});

// Import all step definitions
require('./src/step-def/hooks');
require('./src/step-def/loginSteps');
require('./src/step-def/homeSteps');
require('./src/step-def/aboutSteps');
require('./src/step-def/navigationSteps');
require('./src/step-def/adminSteps');
