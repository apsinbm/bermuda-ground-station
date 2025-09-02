import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact form with all fields', async ({ page }) => {
    // Check form visibility
    await expect(page.getByRole('heading', { name: /Request a Quote/ })).toBeVisible();
    
    // Check required fields
    await expect(page.getByLabel(/First Name/)).toBeVisible();
    await expect(page.getByLabel(/Last Name/)).toBeVisible();
    await expect(page.getByLabel(/Email Address/)).toBeVisible();
    await expect(page.getByLabel(/Company/)).toBeVisible();
    await expect(page.getByLabel(/Primary Use Case/)).toBeVisible();
    await expect(page.getByText(/Frequency Bands/)).toBeVisible();
    await expect(page.getByLabel(/Antenna Size/)).toBeVisible();
    await expect(page.getByLabel(/Operation/)).toBeVisible();
    await expect(page.getByLabel(/Power Required/)).toBeVisible();
    await expect(page.getByText(/Location Preference/)).toBeVisible();
    await expect(page.getByLabel(/Timeline/)).toBeVisible();
    await expect(page.getByLabel(/Additional Requirements/)).toBeVisible();
  });

  test('should show validation errors for empty required fields', async ({ page }) => {
    // Try to submit empty form
    await page.getByRole('button', { name: /Submit Request/ }).click();
    
    // Check for validation errors
    await expect(page.getByText(/First name is required/)).toBeVisible();
    await expect(page.getByText(/Last name is required/)).toBeVisible();
    await expect(page.getByText(/Email is required/)).toBeVisible();
    await expect(page.getByText(/Company is required/)).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    await page.getByLabel(/Email Address/).fill('invalid-email');
    await page.getByRole('button', { name: /Submit Request/ }).click();
    
    await expect(page.getByText(/Invalid email address/)).toBeVisible();
  });

  test('should fill out form successfully', async ({ page }) => {
    // Fill out the form
    await page.getByLabel(/First Name/).fill('John');
    await page.getByLabel(/Last Name/).fill('Doe');
    await page.getByLabel(/Email Address/).fill('john.doe@example.com');
    await page.getByLabel(/Company/).fill('Test Satellite Corp');
    await page.getByLabel(/Phone Number/).fill('+1-555-123-4567');
    
    // Select dropdown options
    await page.getByLabel(/Primary Use Case/).selectOption('leo-constellation');
    await page.getByLabel(/Antenna Size/).selectOption('medium-2-5m');
    await page.getByLabel(/Operation/).selectOption('both');
    await page.getByLabel(/Power Required/).selectOption('medium-1-5kw');
    await page.getByLabel(/Timeline/).selectOption('6-months');
    
    // Check frequency bands
    await page.getByRole('checkbox', { name: /C-Band/ }).check();
    await page.getByRole('checkbox', { name: /Ku-Band/ }).check();
    
    // Check location preferences
    await page.getByRole('checkbox', { name: /Rooftop Installation/ }).check();
    
    // Fill message
    await page.getByLabel(/Additional Requirements/).fill('We need a ground station for our LEO constellation with specific frequency coordination requirements.');
    
    // Form should be ready to submit (we won't actually submit in test to avoid API calls)
    const submitButton = page.getByRole('button', { name: /Submit Request/ });
    await expect(submitButton).toBeVisible();
    await expect(submitButton).not.toBeDisabled();
  });

  test('should have contact information visible', async ({ page }) => {
    await expect(page.getByText(/\+1 \(441\) 555-0123/)).toBeVisible();
    await expect(page.getByText(/info@bermuda-ground-station\.com/)).toBeVisible();
    await expect(page.getByText(/Hamilton, Bermuda/)).toBeVisible();
  });

  test('should display response process information', async ({ page }) => {
    await expect(page.getByText(/Initial Review/)).toBeVisible();
    await expect(page.getByText(/Site Assessment/)).toBeVisible();
    await expect(page.getByText(/Regulatory Check/)).toBeVisible();
    await expect(page.getByText(/Custom Proposal/)).toBeVisible();
  });
});