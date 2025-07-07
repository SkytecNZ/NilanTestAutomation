import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://iq.dev.aofrio.cloud/login');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('flutter-view').click();
  const page1 = await page1Promise;
  await page1.goto('https://id.aofrio.cloud/realms/global/protocol/openid-connect/auth?scope=openid&response_type=code&client_id=portal-dev&redirect_uri=https%3A%2F%2Fiq.dev.aofrio.cloud%2Fredirect.html&state=89263e6e-4135-4a7b-9cb5-d569947cdf62&nonce=8da577f0e7fb26870b8d2350caee289e241c8353b2cbba6024857a2ccd0559f9&code_challenge=yzh50f4siljDb6RiBdV6ZcqLPNPXarChbhO-CLwl7VM&code_challenge_method=S256');
  await page1.locator('#username').click();
  await page1.locator('#username').fill('nilantha.hewage@aofrio.com');
  await page1.locator('#password').click();
});