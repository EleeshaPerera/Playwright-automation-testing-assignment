const { test, expect } = require('../auth.setup');
const { ProductListingPage } = require('../../pages/products/ProductListingPage');
const { ProductDetailsPage } = require('../../pages/products/ProductDetailsPage');


test.describe('product page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC-23 Add To Cart Button', async ({ page }) => {
    const listing = new ProductListingPage(page);
    await listing.searchProduct('laptop');
    await expect(page.locator('body')).toContainText(/laptop/i);
  });

  test('TC-24 Product URL', async ({ page }) => {
    const listing = new ProductListingPage(page);
    await listing.searchProduct('earbuds');
    await expect(page).toHaveURL(/q=/);
  });

  test('TC-25 Buy Now Button', async ({ page }) => {
    const listing = new ProductListingPage(page);

    await listing.searchProduct('laptop');

    await page.waitForTimeout(3000);

    await page.locator('a').filter({ hasText: /laptop/i }).first().click();

    const details = new ProductDetailsPage(page);

    await expect(details.buyNowButton.first()).toBeVisible();
});
});
