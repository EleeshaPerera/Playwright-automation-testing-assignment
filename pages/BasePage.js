class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(path = '/') {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }

  async click(locator) {
    await locator.click();
  }

  async fill(locator, value) {
    await locator.fill(value);
  }

  async waitForElement(locator) {
    await locator.waitFor({ state: 'visible' });
  }

  async getText(locator) {
    return locator.textContent();
  }
}

module.exports = { BasePage };
