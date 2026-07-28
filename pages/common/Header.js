const { BasePage } = require('../BasePage');

class Header extends BasePage {
  constructor(page) {
    super(page);
    this.logo = page.locator('a[href="https://www.daraz.lk/"] img');
    this.cartLink = page.locator('a[href="https://cart.daraz.lk/cart"]');
    this.loginLink = page.locator('a:has-text("Login")');
    this.languageLink = page.locator('text=භාෂාව තෝරන්න');
  }

  async clickLogo() {
    await this.click(this.logo.first());
  }

  async openCart() {
  await this.cartLink.first().evaluate((element) => {
    element.click();
  });
}
  async openLogin() {
    await this.click(this.loginLink.first());
  }

  async changeLanguage() {
    await this.click(this.languageLink.first());
  }
}

module.exports = { Header };
