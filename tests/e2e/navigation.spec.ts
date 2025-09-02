import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    await page.goto('/');
    
    // Test home page
    await expect(page).toHaveTitle(/Atlantic Ground Station/);
    await expect(page.getByRole('heading', { name: /Atlantic Ground Station/ })).toBeVisible();
    
    // Test services navigation
    await page.getByRole('link', { name: 'Services' }).click();
    await expect(page).toHaveURL('/services');
    await expect(page.getByRole('heading', { name: /Ground Station Hosting Services/ })).toBeVisible();
    
    // Test locations navigation
    await page.getByRole('link', { name: 'Locations' }).click();
    await expect(page).toHaveURL('/locations');
    await expect(page.getByRole('heading', { name: /Ground Station Locations/ })).toBeVisible();
    
    // Test contact navigation
    await page.getByRole('link', { name: /Get Quote|Contact/ }).first().click();
    await expect(page).toHaveURL('/contact');
    await expect(page.getByRole('heading', { name: /Get Your Ground Station Quote/ })).toBeVisible();
    
    // Test FAQ navigation
    await page.goto('/faq');
    await expect(page).toHaveURL('/faq');
    await expect(page.getByRole('heading', { name: /Frequently Asked Questions/ })).toBeVisible();
  });

  test('should work on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Test mobile menu
    const menuButton = page.getByRole('button', { name: /toggle menu|menu/i });
    await expect(menuButton).toBeVisible();
    
    await menuButton.click();
    await expect(page.getByText('Services')).toBeVisible();
    await expect(page.getByText('Locations')).toBeVisible();
  });

  test('should have correct meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/North Atlantic Ground Station/);
    
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /Professional satellite antenna hosting/);
    
    // Check OpenGraph tags
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /Atlantic Ground Station/);
  });
});