const { BasePage } = require('../BasePage');

class ProductDetailsPage extends BasePage {
  constructor(page) {
    super(page);
    this.addToCartButton = page.locator('button:has-text("Add to Cart")');
    this.buyNowButton = page.getByText('Buy Now', { exact: true });
  }

  async clickAddToCart() {
    await this.click(this.addToCartButton.first());
  }

  async clickBuyNow() {
    await this.click(this.buyNowButton.first());
  }
}

module.exports = { ProductDetailsPage };
