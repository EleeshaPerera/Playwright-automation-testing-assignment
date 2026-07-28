const { test, expect } = require('../auth.setup');
const { HomePage } = require('../../pages/home/HomePage');
const { Header } = require('../../pages/common/Header');

test.describe('home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC-10 Homepage Title', async ({ page }) => {
    const homePage = new HomePage(page);
    const title = await homePage.verifyTitle();
    expect(title).toContain('Daraz');
  });

  test('TC-11 Header Visible', async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(page.locator('body')).toContainText(/Login|Sign Up/i);
    await expect(await homePage.verifyHeader()).toBeTruthy();
  });

  test('TC-12 Empty Cart Badge', async ({ page }) => {
    const header = new Header(page);
    await header.openCart();
    await expect(page.locator('body')).toContainText(/cart|Cart/i);
  });

  test('TC-13 Logo Navigation', async ({ page }) => {
    const header = new Header(page);
    await header.clickLogo();
    await expect(page).toHaveURL(/daraz\.lk/);
  });
});
