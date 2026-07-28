const { test, expect } = require('../auth.setup');
const { LoginPage } = require('../../pages/user/LoginPage');
const { Header } = require('../../pages/common/Header');
const fs = require('fs');
const path = require('path');

const users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../data/users.json'), 'utf8'));

test.describe('login flows', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC-01 Successful Login', async ({ page }) => {
    const header = new Header(page);
    await header.openLogin();
    const loginPage = new LoginPage(page);
    await loginPage.login(users.validUser.email, users.validUser.password);
    await expect(page).toHaveURL(/daraz\.lk/);
  });

  test('TC-02 Language Change', async ({ page }) => {
    const header = new Header(page);
    await header.changeLanguage();
    await expect(page.locator('body')).toContainText(/භාෂාව|language/i);
  });

  test('TC-17 Switch Sinhala ↔ English', async ({ page }) => {
    const header = new Header(page);
    await header.changeLanguage();
    await expect(page.locator('body')).toContainText(/English|සිංහල|Sinhala/i);
  });
});
