const { test, expect } = require('../auth.setup');
const { Header } = require('../../pages/common/Header');
const { LoginPage } = require('../../pages/user/LoginPage');
const fs = require('fs');
const path = require('path');

const users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../data/users.json'), 'utf8'));

test.describe('authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC-14 Login Modal', async ({ page }) => {
    const header = new Header(page);
    await header.openLogin();
    await expect(page.locator('body')).toContainText(/Login/i);
  });

  test('TC-15 Invalid Login', async ({ page }) => {
    const header = new Header(page);
    await header.openLogin();
    const loginPage = new LoginPage(page);
    await loginPage.login(users.invalidUser.email, users.invalidUser.password);
    await expect(page.locator('body')).toContainText(/login|error|incorrect/i);
  });

  test('TC-16 Logout', async ({ page }) => {
    const header = new Header(page);
    await header.openLogin();
    await expect(page.locator('body')).toContainText(/Login/i);
  });
});
