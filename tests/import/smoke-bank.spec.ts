// @ts-nocheck
import { test, expect } from '@playwright/test';
import { defaults } from '../bank-defaults.ts';

console.log(defaults.bank);

// Basic test case
test('basic test - check page title', async ({ page }) => {
  // Navigate to the Playwright website
  await page.goto('https://playwright.dev/');

  // Check if the page title is correct
  const title = await page.title();
  expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
});

// test.describe(`Bank: ${defaults.bank}`, () => {
//   defaults.services.forEach((service) => {
//     test(`Visit ${service.serviceName}`, async ({ page }) => {
//       // Visit the service URL
//       const response = await page.goto(service.serviceUrl);

//       // Check if the status is 200
//       expect(response?.status()).toBe(200);

//       // Take a screenshot and compare with baseline
//       // await expect(page).toHaveScreenshot(`${service.serviceName}.png`);
//     });
//   });
// });
