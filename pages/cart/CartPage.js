const { BasePage } = require('../BasePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartLink = page.getByRole('link', { name: /cart/i }).first();
    this.removeButton = page.getByRole('button', { name: /remove/i }).first();
    this.badge = this.cartLink.locator('span').filter({ hasText: /\d+/ });
  }

  async removeItem() {
    await this.click(this.removeButton);
  }

  async getCartCount() {
    const badgeCount = this.badge.first();
    if (await badgeCount.count()) {
      const text = await badgeCount.textContent();
      const match = text?.match(/\d+/);
      return match ? Number(match[0]) : 0;
    }

    return 0;
  }

  async verifyBadge() {
    return this.badge.first().isVisible();
  }
}

module.exports = { CartPage };
