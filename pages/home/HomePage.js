const { BasePage } = require('../BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    this.logo = page.locator('a[href="https://www.daraz.lk/"] img').first();
    this.header = page.locator('a').filter({ hasText: /Daraz/i }).first();
  }

  async verifyTitle() {
    return await this.page.title();
  }

  async verifyLogo() {
    await this.waitForElement(this.logo);
    return await this.logo.isVisible();
  }

  async verifyHeader() {
    await this.waitForElement(this.header);
    return await this.header.isVisible();
  }
}

module.exports = { HomePage };