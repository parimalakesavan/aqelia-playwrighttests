import * as os from 'os';
// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { start } from 'repl';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 1,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  //timeout: 40000,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'], ['line'], ['allure-playwright', {
    detail: true,
    suiteTitle: false,
    environmentInfo: {
      os_platform: os.platform(),
      os_release: os.release(),
      os_vesion: os.version(),
      node_version: process.version
    }
  }
  ]],
  use: {
    launchOptions: {
      slowMo: 50,
    },
    trace:'on-first-retry',
    video: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
   /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/
  ],
});

