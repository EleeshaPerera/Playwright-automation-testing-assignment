const { BasePage } = require('../BasePage');

class SearchBar extends BasePage {
  constructor(page) {
    super(page);
    this.searchInput = page.getByPlaceholder('Search in Daraz');
    this.searchButton = page.locator('a[href*="catalog/?q="]');
  }

  async searchProduct(keyword) {
    await this.fill(this.searchInput, keyword);
    await this.click(this.searchButton.first());
  }

  async clearSearch() {
    await this.fill(this.searchInput, '');
  }
}

module.exports = { SearchBar };
