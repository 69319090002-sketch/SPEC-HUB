const test = require('node:test');
const assert = require('node:assert');
const { getCategoryData, saveCategoryData } = require('./data-store');

test('loads fallback data and persists edits to storage', () => {
  const storage = {};
  const fallback = [{ name: 'Intel Core i5' }];

  const initial = getCategoryData('cpu', fallback, storage);
  assert.deepStrictEqual(initial, fallback);

  const updated = [{ name: 'AMD Ryzen 7' }];
  saveCategoryData('cpu', updated, storage);

  const reloaded = getCategoryData('cpu', fallback, storage);
  assert.deepStrictEqual(reloaded, updated);
});
