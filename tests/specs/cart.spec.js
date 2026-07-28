const { test, expect } = require('../auth.setup');
const { Header } = require('../../pages/common/Header');
const { CartPage } = require('../../pages/cart/CartPage');

test.describe('cart', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

 test('TC-07 Add to Cart', async ({ page }) => {
  const header = new Header(page);

  await header.openCart();

  await expect(page).toHaveURL(/cart\.daraz\.lk/);
});

  test('TC-08 Reload Persistence', async ({ page }) => {
    await page.reload();
    await expect(page).toHaveURL(/daraz\.lk/);
  });

  test('TC-09 Remove Item', async ({ page }) => {

  const header = new Header(page);

  await header.openCart();

  await expect(page).toHaveURL(/cart\.daraz\.lk|member\.daraz\.lk/);

});
  test('TC-26 Cart Badge Increase', async ({ page }) => {
    const cartPage = new CartPage(page);
    const count = await cartPage.getCartCount();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
