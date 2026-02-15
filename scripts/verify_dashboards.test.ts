import { test, expect } from '@playwright/test';

test('Verify User Dashboard', async ({ page }) => {
  await page.goto('http://localhost:3004/dashboard');
  await page.screenshot({ path: 'user_dashboard.png', fullPage: true });
});

test('Verify Admin Dashboard', async ({ page }) => {
  await page.goto('http://localhost:3004/admin/dashboard');
  await page.screenshot({ path: 'admin_dashboard.png', fullPage: true });
});

test('Verify Editor', async ({ page }) => {
    await page.goto('http://localhost:3004/dashboard/create');
    await page.screenshot({ path: 'editor_view.png', fullPage: true });
  });
