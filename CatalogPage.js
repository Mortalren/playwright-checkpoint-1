export class CatalogPage {
  constructor(page) {
    this.page = page;
  }

  async search(query) {
    // BEGIN
    await this.page.getByRole('textbox', { name: 'Search' }).fill(query)
    // END
  }

  async selectBrand(brand) {
    // BEGIN
    await this.page.getByRole('checkbox', { name: brand, exact: true }).check()
    // END
  }

  async openProduct(name) {
    // BEGIN
    const card = this.page.locator('a[href^="/products/"]').filter({
      has: this.page.getByRole('heading', { name, exact: true }),
    })
    await card.getByRole('heading', { name, exact: true }).click()
    // END
  }

  async nextPage() {
    // BEGIN
    await this.page.getByRole('link', { name: 'Next' }).first().click()
    // END
  }
}

