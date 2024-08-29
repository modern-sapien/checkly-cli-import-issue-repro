// @ts-nocheck
import { test, expect } from '@playwright/test';

export const defaults = {
  bank: 'bank-a',
  services: [
    {
      serviceName: 'service1',
      serviceUrl: 'https://www.google.com',
    },
    {
      serviceName: 'service3',
      serviceUrl: 'https://www.linkedin.com',
    },
  ],
};

test.describe(`Bank: ${defaults.bank}`, () => {
  defaults.services.forEach((service) => {
    test(`Visit ${service.serviceName}`, async ({ page }) => {
      // Visit the service URL
      const response = await page.goto(service.serviceUrl);

      // Check if the status is 200
      expect(response?.status()).toBe(200);

    });
  });
});