const { BasePage } = require('../BasePage');

class ProductListingPage extends BasePage {
  constructor(page) {
    super(page);
    this.productLink = page.locator('a[href*="products/"]');
    this.brandFilter = page.locator('text=Brand').first();
    this.priceFilter = page.locator('text=Price').first();
  }

  async searchProduct(keyword) {
    await this.page.goto(`${this.page.url()}?q=${encodeURIComponent(keyword)}`);
  }

  async openProduct() {
    await this.click(this.productLink.first());
  }

  async applyBrandFilter() {
    await this.click(this.brandFilter);
  }

  async applyPriceFilter() {
    await this.click(this.priceFilter);
  }
}

module.exports = { ProductListingPage };
