import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact information', async ({ page }) => {
    // Check contact information is visible
    await expect(page.getByRole('heading', { name: /Contact Information/ })).toBeVisible();
    
    // Check email is visible
    await expect(page.getByText(/info@atlanticground.com/)).toBeVisible();
    await expect(page.getByText(/Hamilton, Bermuda/)).toBeVisible();
  });





});