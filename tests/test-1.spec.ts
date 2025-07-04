import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://iq.dev.aofrio.cloud/login');
  await expect(page).toHaveTitle(/IQ/);
await page.getByPlaceholder('Email').fill('nilantha.hewage@aofrio.com');
});
