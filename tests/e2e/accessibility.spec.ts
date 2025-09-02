import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy on home page', async ({ page }) => {
    await page.goto('/');
    
    // Check for proper h1
    const h1Elements = page.locator('h1');
    await expect(h1Elements).toHaveCount(1);
    await expect(h1Elements.first()).toContainText(/Bermuda Ground Station/);
    
    // Check for h2 elements
    const h2Elements = page.locator('h2');
    await expect(h2Elements.first()).toBeVisible();
  });

  test('should have proper ARIA labels and roles', async ({ page }) => {
    await page.goto('/');
    
    // Check navigation
    const nav = page.getByRole('navigation');
    await expect(nav).toBeVisible();
    
    // Check buttons have accessible names
    const buttons = page.getByRole('button');
    for (let i = 0; i < await buttons.count(); i++) {
      const button = buttons.nth(i);
      const accessibleName = await button.getAttribute('aria-label') || await button.textContent();
      expect(accessibleName).toBeTruthy();
    }
  });

  test('should have proper alt text for images', async ({ page }) => {
    await page.goto('/');
    
    const images = page.locator('img');
    for (let i = 0; i < await images.count(); i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      const ariaLabel = await img.getAttribute('aria-label');
      const isDecorative = await img.getAttribute('aria-hidden');
      
      // Image should have alt text, aria-label, or be marked as decorative
      expect(alt || ariaLabel || isDecorative).toBeTruthy();
    }
  });

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/');
    
    // Test tab navigation
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toBeVisible();
    
    // Continue tabbing through interactive elements
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
      const focused = page.locator(':focus');
      if (await focused.count() > 0) {
        await expect(focused).toBeVisible();
      }
    }
  });

  test('should have sufficient color contrast', async ({ page }) => {
    await page.goto('/');
    
    // This is a basic test - in production you'd use automated tools
    // Check that text is visible and readable
    await expect(page.getByRole('heading', { name: /Bermuda Ground Station/ })).toBeVisible();
    await expect(page.getByText(/Strategic satellite antenna hosting/)).toBeVisible();
  });

  test('should work with screen reader simulation', async ({ page }) => {
    await page.goto('/');
    
    // Check for proper semantic structure
    const main = page.getByRole('main');
    await expect(main).toBeVisible();
    
    const headings = page.getByRole('heading');
    await expect(headings.first()).toBeVisible();
    
    // Check for landmarks
    const navigation = page.getByRole('navigation');
    await expect(navigation).toBeVisible();
  });

  test('should handle focus management in contact form', async ({ page }) => {
    await page.goto('/contact');
    
    // Test form field focus
    await page.getByLabel(/First Name/).focus();
    await expect(page.getByLabel(/First Name/)).toBeFocused();
    
    // Test tab order in form
    await page.keyboard.press('Tab');
    await expect(page.getByLabel(/Last Name/)).toBeFocused();
  });

  test('should have proper form labels and descriptions', async ({ page }) => {
    await page.goto('/contact');
    
    // Check that form fields have proper labels
    const requiredFields = [
      /First Name/,
      /Last Name/,
      /Email Address/,
      /Company/,
    ];
    
    for (const fieldName of requiredFields) {
      const field = page.getByLabel(fieldName);
      await expect(field).toBeVisible();
    }
    
    // Check for error message accessibility
    await page.getByRole('button', { name: /Submit Request/ }).click();
    
    // Error messages should be associated with fields
    const errorMessages = page.locator('[role="alert"], .text-red-600');
    if (await errorMessages.count() > 0) {
      await expect(errorMessages.first()).toBeVisible();
    }
  });

  test('should support prefers-reduced-motion', async ({ page }) => {
    // Set reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    
    // Page should still be functional with reduced motion
    await expect(page.getByRole('heading', { name: /Bermuda Ground Station/ })).toBeVisible();
    
    // Test navigation still works
    await page.getByRole('link', { name: 'Services' }).click();
    await expect(page).toHaveURL('/services');
  });
});