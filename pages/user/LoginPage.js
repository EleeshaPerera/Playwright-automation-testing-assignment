const { BasePage } = require('../BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.locator('input[type="text"]').first();
    this.passwordInput = page.locator('input[type="password"]').first();
    this.loginButton = page.locator('button:has-text("LOGIN")');
  }

  async enterEmail(email) {
    await this.fill(this.emailInput, email);
  }

  async enterPassword(password) {
    await this.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.click(this.loginButton.first());
  }

  async login(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}

module.exports = { LoginPage };
