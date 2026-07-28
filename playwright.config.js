const path = require('path');
const { defineConfig } = require('@playwright/test');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, 'env', 'qa.env') });

module.exports = defineConfig({
  testDir: './tests/specs',
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: false,
  retries: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
     baseURL: 'https://www.daraz.lk',
    headless: true,
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
    trace: 'retain-on-failure',
  },
});
