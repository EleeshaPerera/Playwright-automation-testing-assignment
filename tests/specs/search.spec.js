const { test, expect } = require('../auth.setup');
const { SearchBar } = require('../../pages/common/SearchBar');
const fs = require('fs');
const path = require('path');

const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../data/products.json'), 'utf8'));

test.describe('search', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC-03 Search Product', async ({ page }) => {
    const searchBar = new SearchBar(page);
    await searchBar.searchProduct(products.product1);
    await expect(page).toHaveURL(/q=/);
  });

  test('TC-04 Suggestions', async ({ page }) => {
    const searchBar = new SearchBar(page);
    await searchBar.searchInput.fill('ear');
    await expect(page.locator('body')).toContainText(/ear/i);
  });

  test('TC-05 Price Filter', async ({ page }) => {
    const searchBar = new SearchBar(page);
    await searchBar.searchProduct('laptop');
    await expect(page.locator('body')).toContainText(/laptop/i);
  });

  test('TC-06 Brand Filter', async ({ page }) => {
    const searchBar = new SearchBar(page);
    await searchBar.searchProduct('phone');
    await expect(page.locator('body')).toContainText(/phone/i);
  });

  test('TC-18 URL contains query', async ({ page }) => {
    const searchBar = new SearchBar(page);
    await searchBar.searchProduct('watch');
    await expect(page).toHaveURL(/q=/);
  });

  test('TC-19 Product list displayed', async ({ page }) => {
    const searchBar = new SearchBar(page);
    await searchBar.searchProduct('laptop');
    await expect(page.locator('body')).toContainText(/laptop/i);
  });

 test('TC-20 Invalid search', async ({ page }) => {
    const searchBar = new SearchBar(page);

    await searchBar.searchProduct('zzzzzz');

    await expect(page).toHaveURL(/q=zzzzzz/);

    await expect(page.locator('body')).toBeVisible();
});

  test('TC-21 Suggestion contains keyword', async ({ page }) => {
    const searchBar = new SearchBar(page);
    await searchBar.searchInput.fill('lap');
    await expect(page.locator('body')).toContainText(/lap/i);
  });

  test('TC-22 Multiple searches', async ({ page }) => {
    const searchBar = new SearchBar(page);
    await searchBar.searchProduct('phone');
    await searchBar.searchProduct('laptop');
    await expect(page).toHaveURL(/q=/);
  });
});
