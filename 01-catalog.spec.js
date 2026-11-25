import { test, expect } from '@playwright/test';
import { CatalogPage } from '../pages/CatalogPage.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Задание 1', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  const cards = page.locator('a[href^="/products/"]')
  const appleCard = cards.filter({ hasText: 'Apple' })
  const redLipstickCard = cards.filter({ hasText: 'Red Lipstick' })
  await expect(appleCard.first()).toBeVisible()

  await model.search('Red Lipstick')
  await expect(redLipstickCard.first()).toBeVisible()
  await expect(appleCard).toHaveCount(0)
  // END
});

test('Задание 2', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  const cards = page.locator('a[href^="/products/"]')
  const appleCard = cards.filter({ hasText: 'Apple' })
  const essenceCard = cards.filter({ hasText: 'Mascara Lash Princess' })
  await expect(appleCard.first()).toBeVisible();
  
  await model.selectBrand('Essence')
  await expect(page.getByRole('checkbox', { name: 'Essence', exact: true })).toBeChecked()
  await expect(essenceCard.first()).toBeVisible()
  await expect(appleCard).toHaveCount(0)
  // END
});

test('Задание 3', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.openProduct('Red Lipstick')
  await expect(page).toHaveURL(/\/products\/4$/)
  await expect(page.getByRole('heading', { name: 'Red Lipstick' })).toBeVisible()
  // END
});

test('Задание 4', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.nextPage();
  // END
});

